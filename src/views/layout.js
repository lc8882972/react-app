import React, { Component } from 'react';
import { Button, Layout } from 'element-react';
import 'element-theme-default';

class CLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <Layout.Row >
                <Layout.Col span="24">
                    <div className="grid-content bg-purple-dark">
                        <Button type="primary" onClick={this.increase}>increase</Button>
                        <Button onClick={this.decrease}>decrease</Button>
                    </div>
                </Layout.Col>
            </Layout.Row>
        );
    }
}

export default CLayout