#piccolo example

To setup do the following:

```shell
mkdir example
cd example
git clone git://github.com/AndreasMadsen/piccolo.git node_modules/piccolo
cd node_modules/piccolo
git checkout cb99a31f8faf21efb11acac14e06d839b5335caa
npm install
cd ../../
git clone git://github.com/AndreasMadsen/piccolo-example.git project
```

To start the piccolo server do the following:

```shell
node project/project.js
```

You can now access the example by visiting http://localhost:8000

