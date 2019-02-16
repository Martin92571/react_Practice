import React,{Component} from 'react';
import Movie from './movies';
import axios from 'axios';

class MovieContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            movies:[]
        }
    }
    componentDidMount(){
        const iTunes='http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(iTunes)
        .then((data)=>{
         this.setState({movies:data.data.feed.entry})
        })
        .catch((data)=>{
            console.log(data);
        })
       
    }
    render(){
        console.log(this.state);
        const movieList=this.state.movies.map((movieInfo,index)=>{
            return <Movie info={movieInfo} key={index}/>
        });
        return(
            <div>
                <h2>MovieContainer</h2>
                {movieList}
            </div>
        )
    }
}

export default MovieContainer;