#!/bin/sh
###
 # @LastEditors: wyswill
 # @Description: 
 # @Date: 2021-06-04 17:54:00
 # @LastEditTime: 2021-06-04 18:06:25
### 
echo "generate bundle.js"
cd ./src/rpc
npx  pbjs -t static-module -w commonjs -o bundle.js *.proto && pbts -o bundle.d.ts bundle.js
npx pbts -o bundle.d.ts bundle.js
echo "done"