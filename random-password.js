const pasws = [];

const getRandomPassword = (size = 15, strong = false) => {
    const min = 3;
    const max = 200;
    const reSize = (size) => {
        if (size < min) {
            size = min;
        }
        if (size > max) {
            size = max;
        }
        return size;
    };
    size = reSize(size);
    const all = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        specials: '!@#$%^&*()_+{}"<>?\[]\./~'
    };
    var chars = '';
    if (strong) {
        var lowercase = all['lowercase'];
        var uppercase = all['uppercase'];
        all['lowercase'] = lowercase.substring(0, lowercase/2)
        all['uppercase'] = uppercase.substring(0, uppercase/2);
        all['specials'] += '...';
    }
    for(var [key, value] of Object.entries(all)) {
        chars += value;
    }
    
    const getGeneratedPassword = (size, strong, chars) => {
        var password = '';
        for (i = 1; i <= size; i++) {
            var charOf = Math.floor(Math.random() * (chars.length + 1));
            var char = chars.charAt(charOf);
            
            if (!char) {
                i -= 1;
                continue;
            }
            password += char;
        }
        var indexOf = pasws.indexOf(password);
        
        if (indexOf != -1) {
            return getGeneratedPassword(size, strong, chars);
        } else {
            pasws.push(password);
        }
        return password;
    };
    
    return getGeneratedPassword(size, strong, chars);
}