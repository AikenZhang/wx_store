//将item状态保存为对象
let newTabs = {
  state: {},
  defaultColor: "#333",
  activeColor: "#ff4422",
  init: function (item) {
    this.state["fyTab-" + item.key] = {
      active: false,
      activeColor: this.defaultColor,
      sort: item.sort ? "desc" : ''
    }
  },
  //item状态更新
  updataInfo: function (v, key) {
    let me = this;
    let state = me.state;
    if (!key) {
      for (let i in state) {
        state[i].active = v;
        state[i].activeColor = me.defaultColor;
      }
    } else {
      state["fyTab-" + key].active = v;
      state["fyTab-" + key].activeColor = me.activeColor;
    }
  },
  active: function (key) {
    this.updataInfo(false);
    this.updataInfo(true, key);
    let sort = this.state["fyTab-" + key].sort
    if (sort) {
      if (sort == "asc") {
        this.state["fyTab-" + key].sort = "desc";
        return "desc";
      } else if (sort == "desc") {
        this.state["fyTab-" + key].sort = "asc";
        return "asc";
      }
    }
  }
};
Component({
  properties: {
    tabs: {
      type: Array,
      value: [],
    },
    key: {
      type: Array,
      value: []
    },
    tabTextActiveColor: {
      type: String,
      value: "#ff4422"
    },
    tabTextDefaultColor: {
      type: String,
      value: "#333"
    },
    //默认
    defaultIndex: {
      type: String,
    }
  },
  data: {
    _index: "",
    _tabs: {}
  },
  attached: function (d) {
    //初始化item状态对象
    let tabs = this.data.tabs;
    let tabTextDeColor = this.data.tabTextDefaultColor;
    newTabs.activeColor = this.data.tabTextActiveColor;
    newTabs.defaultColor = this.data.tabTextDefaultColor;
    tabs.forEach((item) => {
      newTabs.init(item)
    })
    this.setData({
      _tabs: newTabs
    })
  },
  ready () {
    let defaultIndex = this.data.defaultIndex
    if (defaultIndex) {
      this._change(defaultIndex)
    }
  },
  methods: {
    //跟新tab状态
    _change(key) {
      let _tabs = this.data._tabs;
      if (newTabs.state["fyTab-" + key].sort) {
        this.triggerEvent("tabChange", { key: key, sort: newTabs.active(key) });
      } else {
        if (this.data._index !== key) {
          this.triggerEvent("tabChange", { key: key });
          newTabs.active(key);
        }
      }
      //更新item状态
      this.setData({
        _tabs: newTabs
      })
      //缓存当前的item
      this.setData({
        _index: key
      })
    },
    tabChange: function (e) {
      let key = e.currentTarget.dataset.key;
      this._change(key)
    }
  }
})