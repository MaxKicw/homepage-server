import React, { Component } from 'react';
import { Textarea, Pane, Label, Button} from 'evergreen-ui';
import { connect } from "react-redux";
import trans from '../../translation/translation';
import '../../App.css';

class Comments extends Component {

    render() { 
        return ( 
          <div className="Comments">
              <Pane>
                <Label
                    htmlFor="commentArea"
                    marginBottom={4}
                    display="block"
                >
                    {trans[this.props.lng].comments}
                </Label>
                <Textarea
                    name="comment"
                    placeholder={trans[this.props.lng].comments}
                    />
                <Button float="right" marginTop="5px" intent="none">{trans[this.props.lng].post}</Button>
            </Pane>
          </div>
         );
    }
}
 
//REDUX

const mapStateToProps = state => {
  return{
      lng: state.lng,
      lngTabs: state.lngTabs,
      private: state.private,
      lngNames: state.lngNames,
      categories: state.categories
  };
} 

const mapDispatchToProps = dispatch => {
  return{
      onChangeLanguage: (index) => dispatch({type:"SET_LNG",index:index}),
      onReveiveArticle: (articles) => dispatch({type:"SET_ARTICLES",articles:articles})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);