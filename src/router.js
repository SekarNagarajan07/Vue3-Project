import { createRouter, createWebHistory } from "vue-router";
import DcHeros from "./Pages/DcHeros";
import CalendarApp from "./Pages/CalendarApp";
import HomePage from "./Pages/HomePage";
import MarkDown from "./Pages/MarkDown";
import SliderPage from "./Pages/SliderPage";
import CalculatorApp from "./Pages/CalculatorApp";
import ReuseableModal from "./Pages/ReuseableModal";
import ChatApp from "./Pages/ChatApp";
import store from "./store/index";
// import TensorFlow from "./Pages/TensorFlow";

const routes = [
  { path: "/", component: HomePage },
  { path: "/DcHeros", component: DcHeros },
  { path: "/CalendarApp", component: CalendarApp },
  { path: "/MarkDown", component: MarkDown },
  { path: "/SliderPage", component: SliderPage },
  { path: "/CalculatorApp", component: CalculatorApp, meta: {middleware: "auth"} },
  { path: "/ReuseableModal", component: ReuseableModal },
  { path: "/ChatApp", component: ChatApp,
  meta: {middleware: "auth"},
   },
  //  { path: "/TensorFlow", component: TensorFlow,

  //   },
   
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to,_,next)=> {
  if(to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if(middleware) {
      middleware.default(next,store);
    }
    else {
      next();
    }
  }else {
    next();
  }
})
export default router;
