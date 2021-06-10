#!/bin/sh
###
 # @LastEditors: wyswill
 # @Description: 
 # @Date: 2021-06-04 17:54:00
 # @LastEditTime: 2021-06-10 13:48:35
### 
echo "generate bundle.js"
cd ./src/rpc
npx  pbjs -t static-module -w commonjs -o bundle.js *.proto && npx pbts -o bundle.d.ts bundle.js
echo "done"