---
id: 43446c13-0957-4309-a41f-34b5bdfc807c
title: Karabiner
desc: ''
updated: 1612392113551
created: 1612392113551
---
### 3 finger trackpad actions

```edn
{:des "hold three fingers on trackpad & press keys" :rules [
   [:condi ["multitouch_extension_finger_count_total" 3]]
   [:f :button2] ;
   :v [:button1 :!Cv]]
;]}
```

