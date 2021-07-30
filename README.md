bin 目录

index 文件的主要作用就是定义指令

package.json 中 

 bin 用来指定每个命令所对应的可执行文件的位置，
 
 npm link 把 bin 中设置的命令挂载到全局
 npm unlink 解绑全局命令


 创建过程中遇到的问题：

 1、js文件不能使用 import ，只能使用require ，解决将 js文件改为ts文件，并添加 tsconfig.json 文件
 2、npm unlink 删除全局配置的变量，若是失败，根据提示手动在 usr/local/bin/ 中直接删除
 