import {getSiteSettings, getAccountInfo} from "@/api/account_api";
import {getToken} from "@/common/js/cookies";

export const SettingsMixin = {
  data() {
    return {
      settings: {},
      currentAccount: {},
      token: '',
    }
  },

  components: {},
  async created() {
    this.settings = await getSiteSettings()
    // await this.getCurrentAccount()
  },

  mounted() {

  },
  activated() {

  },

  methods: {
    async getCurrentAccount() {
      const token = getToken()
      this.token = token
      if (token) {
        this.currentAccount = await getAccountInfo()
      }
    }
  }
}
