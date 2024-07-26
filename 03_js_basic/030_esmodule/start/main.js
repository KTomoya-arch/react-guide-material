import { hello, User } from "./module.js";
// 一つしかないので命名は変えられる
import func from "./module.js";

func();
hello();
const user = new User("Tom");
user.hello();
