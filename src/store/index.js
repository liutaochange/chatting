import Vue from 'vue';
import Vuex from 'vuex';
import url from '@/api/index';
const ROBOT_NAME = 'base-room';
const ROBOT_URL = 'e9daf6c71e214db3bdaff6d3c2776246';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 历史记录
    msghistory: {
      infos: [],
      allmessage: [],
    },
    // 房间信息
    roomdetail: {
      id: '',
      users: {},
      infos: [],
    },
    // 机器人开场白
    robotmsg: [
      {
        username: ROBOT_NAME,
        src: ROBOT_URL,
        msg: '嗨，聊五毛的呗',
      },
    ],
    unRead: {
      room1: 0,
      room2: 0,
    },
    // svg
    svgmodal: null,
    // 是否启动tab
    istab: false,

    emojiShow: false,
  },
  getters: {
    getUsers: state => state.roomdetail.users,
    getInfos: state => state.roomdetail.infos,
    getMessHistoryInfos: state => state.messhistory.infos,
    getMessHistoryAll: state => state.messhistory.allmessage,
    getRobotMsg: state => state.robotmsg,
    getEmoji: state => state.emojiShow,
  },
  mutations: {
    setUnread(state, value) {
      for (let i in value) {
        state.unRead[i] = +value[i];
      }
    },
    setEmoji(state, data) {
      state.emojiShow = data;
    },
    setTab(state, data) {
      state.istab = data;
    },
    setSvgModal(state, data) {
      state.svgmodal = data;
    },
    addRoomDetailInfos(state, data) {
      state.roomdetail.infos.push(...data);
    },
    addRoomDefatilInfosHis(state, data) {
      const list = state.roomdetail.infos;
      state.roomdetail.infos = data.concat(list);
    },
    setRoomDetailInfos(state) {
      state.roomdetail.infos = [];
    },
    setUsers(state, data) {
      state.roomdetail.users = data;
    },
    setAllMessHistory(state, data) {
      state.messhistory.allmessage = data;
    },
    setMessHistoryInfos(state, data) {
      state.messhistory.infos = data;
    },
    setRobotMsg(state, data) {
      state.robotmsg.push(data);
    },
  },
  actions: {
    async uploadAvatar(context, data) {
      console.log(context);
      const res = await url.postUploadAvatar(data);
      return res.data;
    },
    async uploadImg(context, data) {
      console.log(context);
      const res = await url.postUploadFile(data);
      if (res) {
        if (res.data.errno === 0) {
          console.log('上传成功');
        }
      }
    },
    async registerSubmit(context, data) {
      console.log(context);
      const res = await url.RegisterUser(data);
      if (res.data.errno === 0) {
        return {
          status: 'success',
          data: res.data,
        };
      }
      return {
        status: 'fail',
        data: res.data,
      };
    },
    async loginSubmit(context, data) {
      console.log(context);
      const res = await url.loginUser(data);
      if (res.data.errno === 0) {
        return {
          status: 'success',
          data: res.data,
        };
      }
      return {
        status: 'fail',
        data: res.data,
      };
    },
    async getAllMessHistory({ commit }, data) {
      const res = await url.RoomHistoryAll(data);
      if (res.data.data.errno === 0) {
        commit('addRoomDefatilInfosHis', res.data.data.data);
      }
    },
    async getRobatMess({ commit }, data) {
      const username = ROBOT_NAME;
      const src = ROBOT_URL;
      const res = await url.getRobotMessage(data);
      if (res) {
        const robotdata = JSON.parse(res.data.data);
        let msg = '';
        // 分类信息
        if (robotdata.code === 100000) {
          msg = robotdata.text;
        } else if (robotdata.code === 200000) {
          msg = robotdata.text + robotdata.url;
        } else {
          msg = '暂不支持此类对话';
        }
        commit('setRobotMsg', { msg, username, src });
      }
    },
  },
});
export default store;
