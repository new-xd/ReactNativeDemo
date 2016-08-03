这是一个简单的react-native demo  

主要为了尝试 [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) and [redux](https://reduxframework.com/)

发现的一些问题

- Switch通过条件判断跳转不同的Scene，当条件发生改变，从而改变Scene之后，虽然Actions.pop不会改变页面，但是会影响真实的页面历史，可以尝试在Login页面点击back发现这个问题
- 没有找到合适方法 展示当前的页面历史（stack）
- 获取当前页，如果当前页是某个tab页的时，当前Scene有时是tab页有时是tabs所在的Scene
