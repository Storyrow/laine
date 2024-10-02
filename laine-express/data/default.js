exports.ROLE_DEFAULT_DATA = [
    {
        id: '795d1bc5-591b-4c08-a716-591c9ad75c83',
        name: 'Admin',
        code: 'admin'
    },
    {
        id: '6dad5d9d-8f57-49a1-b973-5a8216a48ea6 ',
        name: 'User',
        code: 'user'
    }
];

exports.USER_DEFAULT_DATA = [
    {
        id: '814500ac-aea8-434c-b77d-182b51ade1d2',
        name: 'Admin',
        email: 'admin@skeleton.com',
        password: 'admin',
        roleId: '795d1bc5-591b-4c08-a716-591c9ad75c83'
    }
];

exports.SETTING_DEFAULT_DATA = [
    {
        id: 'b0714389-8d36-44a9-9486-3389f6882f8a',
        code: 'profile',
        name: 'Laine',
        setting: {
            name: 'Laine',
            email: 'cs@laine.com',
        }
    },
    {
        id: 'dc581474-a7b8-4f4f-a555-029641f95bd2',
        code: 'storage',
        name: 'Object Storage (For media)',
        setting: {
            current: 'local', // local or cloudinary
            cloudinaryCloudName: '',
            cloudinaryApiKey: '',
            cloudinaryApiSecret: ''
        }
    },
];