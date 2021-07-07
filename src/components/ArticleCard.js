import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import http from "../plugins/Fetch";


function ArticleCard({article}) {

    const useStyles = makeStyles({
        media: {
            height: 140,
        },
    });

    const classes = useStyles();

    function goToArticle(index){
        window.open(article[index].url,'_blank')

        http.post('/article', article[index]).then(res => {})
    }

    return (
        <div className="p-10" style={{marginTop: "160px"}}>
                <Grid className='d-flex sm-main' style={{justifyContent: "space-around"}} container>
                    {article.map((item, index) =>
                        <Card key={index} onClick={() => goToArticle(index)} className="root">
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h3">
                                        {item.title}
                                    </Typography>
                                    <Typography className='truncate' variant="body2" color="textSecondary"
                                                component="p">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Typography style={{textAlign: "left", marginLeft: "14px"}} variant="body2"
                                        color="textSecondary" component="p">
                                Published at: {item.publishedAt}
                            </Typography>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Read more
                                </Button>
                            </CardActions>
                        </Card>
                    )}
                </Grid>
        </div>
    );
}

export default ArticleCard;