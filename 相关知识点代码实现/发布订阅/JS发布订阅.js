/* Pubsub */
function Pubsub() {
  //存放事件和对应的处理方法
  this.handles = {
    // 'xxx': [fn, ...]  表示某个事件和对应的回调函数，多个fn是因为会有多个地方监听这个事件
  };
}

Pubsub.prototype = {
  //传入事件类型type和事件处理handle
  on: function (type, handle) {
    if (!this.handles[type]) {
      this.handles[type] = [];
    }
    this.handles[type].push(handle);
  },
  emit: function (type, message) {
    if (!this.handles[type]) {
      return false;
    }
    this.handles[type].forEach((handle) => {
      handle.call(this, message);
    });
  },
  off: function (type, handle) {
    const handles = this.handles[type];
    // 必须存在handle, 因为不能你取消监听把别人的监听也取消了
    if (handles && handle) {
      let targetIndex = [];
      handles.forEach((_handle, index) => {
        if (_handle === handle) {
          targetIndex.push(index);
        }
      });
      if (targetIndex.length) {
        this.handles[type] = handles.filter((e, i) => !targetIndex.includes(i));
      }
    }
  },
};

let p1 = new Pubsub();
const p1_handle = (message) => {
  console.log(message);
};
p1.on("detail", p1_handle);
p1.emit("detail", "hello,p1");
// let p2 = new Pubsub();
// p2.on('detail', (name)=> {console.log(name)});
// p2.emit('detail', 'observer2')
// p2.off('detail');
// p2.emit('detail', 'observer3');
