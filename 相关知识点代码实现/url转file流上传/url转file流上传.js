    imgUrlToBase64 (url) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = function () {
          const canvas = document.createElement('canvas');
          // this为图片本身;
          canvas.width = this.naturalWidth;
          canvas.height = this.naturalHeight;
          // 将图片插入画布并开始绘制
          canvas.getContext('2d').drawImage(image, 0, 0);
          // result
          const result = canvas.toDataURL('image/png');
          resolve(result);
        };
        image.setAttribute('crossOrigin', 'Anonymous');
        image.src = url;
        // 图片加载失败的错误处理
        image.onerror = () => {
          reject(new Error('返回的链接获取图片错误'));
        };
      });
    },
    base64toFile (dataurl, filename) { // 将base64转换为文件
      const arr = dataurl.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    getOldImg (url) {
      const fileName = url.match(/.com\/(\S*)\?/)[1];
      this.imgUrlToBase64(url).then(res => {
        const file = this.base64toFile(res, fileName);
        // file转base64,测试用
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = function () {
        //   console.log(reader.result); // 获取到base64
        // };
        const formData = new FormData();
        formData.append('upload_file', file);
        this.$ajax.post('/upload/v2/OriginalImage', formData).then(res => {
          this.oldImgList.push(res.data);
          if (this.oldImgList.length == this.imgList.length) {
            this.$Message.info(`获取到${this.oldImgList.length}张原开户附件图片，请点击上传原开户附件！`);
          }
        });
      });
    }