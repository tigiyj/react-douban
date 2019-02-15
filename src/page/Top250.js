import React, { Component } from 'react';
import { getTop250Ajax } from './../api/top250';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Top250 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
            isLoad: false
        }
    }
    componentDidMount() {
        const _this = this;
        getTop250Ajax()
            .then(function (response) {
                _this.setState({
                    subjects: response.subjects,
                    isLoad: true
                })
            })
            .catch(function (error) {
                _this.setState({
                    error: error
                })
            })
    }
    render() {
        const isLoad = this.state.isLoad;
        const subjects = this.state.subjects;
        return (
            <div>
                {isLoad ? (
                    subjects.length > 0 ? (
                        subjects.map((item) => {
                            return (
                                <Card key={item.id}>
                                    <Card.Title as="span"><Link to={`movieDetail/${item.id}`}>{item.title}({item.rating.average})</Link></Card.Title>
                                    <Card.Subtitle>{item.original_title}</Card.Subtitle>
                                    <Card.Text>
                                        {item.casts.map((cast) => {
                                            return (
                                                cast.name + '/'
                                            )
                                        })}
                                        {item.year}
                                    </Card.Text>
                                </Card>
                            )
                        })
                    ) : 'empty'
                ) : "loading"}
            </div>

        );
    }
}

export default Top250;
