idrinth.text = {     
    data: {
        chat: {
            user:{
                ban: 'Ban User',
                banned: 'Banned',
                makeMod: 'Make Moderator',
                makeAdmin: 'Make Admin',
                owner: 'Owner',
                makeUser: 'Make user',
                user: 'User',
                mod:'Mod',
            },
            button:{
                close: 'Close',
                invite:'Invite to Chat ',
                account: 'Account',
                gameReload: 'Reload game',
                scriptReload: 'Reload Script',
                facebookLoginRefresh: 'Refresh Facebook Game Login',
                ngRaidJoin: 'NG Raid Join(slow!)',
                manually: 'Import all manually',
                fav: 'Import favs manually',
                disableAutojoin: 'disable timed Autojoin',
                enableAutojoin: 'enable timed Autojoin',
                clear: 'Clear Raids',
                joinRestart: 'Restart Raidjoin',
                joinedLast: 'Last raids joined:',
                bossName: 'Enter Boss\' Name',
                chat: 'Chat',
                createChat: 'Create Chat',
                joinChat: 'Join Chat',
            },
            message:{
                optional: 'This part of the script is optional, so logging in is unneeded for raid catching etc.',
                invalid: 'This should not be the data for logging in on the related gaming site and the login does not need to match your ingame name - you can set a display name after the registration.',
                offline: "Not logged in, click to login/register",
                modifyFail:'Can\'t modify that user at the moment',
                joinFail:'Can\'t create at the moment',
                joinNotwork:'Joining didn\'t work',
                loginFail: 'Login failed in an unexpected way',
                unknown:'The given username for dotd.idrinth.de is unknown, do you want to register it there?',
            },
            error:{
                errorDefault: 'Unexpected error occurred. Please contact script developers'
                                + ' (https://github.com/Idrinth/IDotD).',
            }
        }
    },

    get: function (key) {
        var getSub = function (obj, keys, func) {
            var key = keys.shift();
            if (obj.hasOwnProperty(key)) {
                if (keys.length > 0) {
                    return func(obj[key], keys, func);
                }
                return obj[key];
            }
            return idrinth.text.data.chat.error.errorDefault;
        };
        return getSub(idrinth.text.data,key.split('.'),getSub);
    }
}