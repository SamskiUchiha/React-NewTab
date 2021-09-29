import React from 'react';
import Bookmark from '../components/Bookmark.js';
import '../css/bookmark.css';
import YouTube from '../images/YouTube.svg';

export default class BookmarkPage extends React.Component {
    constructor() {
        super();
        this.state = {
            bookmarks: [
                {name: 'Youtube', link: 'https://www.youtube.com/', image: YouTube, category: 'Entertainment'},
                {name: 'Twitch', link: 'https://www.twitch.com/', image: 'twitch.svg', category: 'Entertainment'},
                {name: 'Github', link: 'https://www.github.com/', image: 'github.svg', category: 'Developer'},
                
                {name: 'Youtube', link: 'https://www.youtube.com/', image: YouTube, category: 'Entertainment'},
                {name: 'Twitch', link: 'https://www.twitch.com/', image: 'twitch.svg', category: 'Entertainment'},
                {name: 'Github', link: 'https://www.github.com/', image: 'github.svg', category: 'Developer'},
                
                {name: 'Youtube', link: 'https://www.youtube.com/', image: YouTube, category: 'Entertainment'},
                {name: 'Twitch', link: 'https://www.twitch.com/', image: 'twitch.svg', category: 'Entertainment'},
                {name: 'Github', link: 'https://www.github.com/', image: 'github.svg', category: 'Developer'},
            ]
        }
    };

    render() {
        return (
            <>
                <Bookmark bookmarks={this.state.bookmarks}/>
            </>
        );
    }
}