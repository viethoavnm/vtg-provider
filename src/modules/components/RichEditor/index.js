import React from 'react';
import { injectIntl } from 'react-intl';
import scriptLoader from 'react-async-script-loader';

const RESOURCE_URL = '/';

class HTMLEditor extends React.PureComponent {
  initizial = () => {
    const initProps = {
      target: this.element,
      readonly: this.props.disabled,
      toolbar: this.props.toolbar,
      plugins: this.props.plugins,
      height: this.props.height,
      setup: (editor) => {
        this.editor = editor;
        editor.on('init', this.onInit);
      },
      images_upload_handler: this.onUploadImage,
      image_prepend_url: RESOURCE_URL
    };
    this.element.style.visibility = '';
    getTinymce().init(initProps);
  };

  onInit = () => {
    const value =
      typeof this.props.value === 'string' ? this.props.value : typeof this.props.initialValue === 'string' ? this.props.initialValue : '';
    this.editor.setContent(value);
    this.editor.on('change keyup setcontent', (e) => {
      this.currentContent = this.editor.getContent();
      this.onEditorChange(this.currentContent);
    });
  }

  onEditorChange = (e) => {
    if (this.props.onChange)
      this.props.onChange(e);
  }

  onUploadImage = (blobInfo, success, failure) => {
    failure("ERROR");
  }

  componentDidUpdate({ isScriptLoadSucceed }) {
    if (!isScriptLoadSucceed && this.props.isScriptLoadSucceed) {
      this.initizial();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.editor && this.editor.initialized) {
      this.currentContent = this.currentContent || this.editor.getContent();

      if (typeof nextProps.value === 'string' && nextProps.value !== this.props.value && nextProps.value !== this.currentContent) {
        this.editor.setContent(nextProps.value);
      }
      if (typeof nextProps.disabled === 'boolean' && nextProps.disabled !== this.props.disabled) {
        this.editor.setMode(nextProps.disabled ? 'readonly' : 'design');
      }
    }
  }

  componentWillUnmount() {
    if (getTinymce() !== null) {
      getTinymce().remove(this.editor);
    }
  }

  render() {
    return (<textarea ref={(elm) => (this.element = elm)} style={{ visibility: 'hidden' }} id={this.id} name={this.props.textareaName} />);
  }
}

const getGlobal = () => (typeof window !== 'undefined' ? window : global);

const getTinymce = () => {
  const global = getGlobal();
  return global && global.tinymce ? global.tinymce : null;
};

HTMLEditor.defaultProps = {
  onChange: () => { },
  height: 480,
  plugins: 'fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools colorpicker textpattern',
  toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat'
}

export default injectIntl(scriptLoader('./js/tinymce/tinymce.min.js')(HTMLEditor));
