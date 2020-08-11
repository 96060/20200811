import React , {Component}  from 'react'
class Basic extends Component {
    static defaultProps ={
        lang:'JavaScript'
    }
    state ={
        hidden:false
    }

    onClickButton = () => {
        this.setState({ hidden: true });
        this.refs.hide.disabled = true;
    }
    render(){
        return (
            <div>
            <span>저는 {this.props.lang} 전문 {this.props.name}입니다!</span>
            {!this.state.hidden && <span>{this.props.birth}년에 태어났습니다.</span>}
            <button onClick={this.onClickButton} ref="hide">숨기기</button>
            </div>
        )
    }
}
export default Basic;