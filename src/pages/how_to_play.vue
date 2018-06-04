<template>
  <div class="how_to_play">
   how_to_play(规则说明)
    <div class="weui-tabber">
    </div>
  </div>
</template>

<script>
// 项目富文本
import {getAbout} from "@/api/account_api";
export default {
    name: "how_to_play",
    components: {},
    data() {
        return {
           
        };
    },
    created() {},
    methods: {
        hi(){
            console.log('hi:');
        },
        async getAbout(){
            const res = await getAbout({
              params
            });

            console.log('res:',res);
            res.status === 200 &&(
                this.listItem = res
            )
        }
    },
    mounted(){
        this.hi();
        this.getAbout();
    }
};
</script>

<style lang="scss">
</style>
