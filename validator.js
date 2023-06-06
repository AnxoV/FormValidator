const Validator = function(options) {
    let that = {};
    Object.assign(that, options);

    that.getData = function() {
        const data = new FormData(that.form);
        return data;
    };

    that.validate = function() {
        const validated = {};

        const data = that.getData();
        const entries = Object.entries(that.rules);
        for (let i = 0; i < entries.length; i += 1) {
            const field = entries[i];
            const name = field[0];
            if (data.has(name)) {
                const value = data.get(name);
                const rule = field[1];
                validated[name] = rule(value);
            }
        }

        return validated;
    };

    return that;
};