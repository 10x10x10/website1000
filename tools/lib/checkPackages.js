// const open = require('open');
const npm = require('npm');


const doneMessage = `

=================================

٩(๑❛ᴗ❛๑)۶ -[ Package 檢查完成 ! ]

=================================

`

npm.load(() => {
    npm.commands.install([], () => {
        console.log(doneMessage);
    });
});
