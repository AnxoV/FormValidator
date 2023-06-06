# FormValidator
A simple Form Validator, written in pure JS

<!-- BEGIN LATEST DOWNLOAD BUTTON -->
[![Download zip](https://custom-icon-badges.herokuapp.com/badge/-Download-blue?style=for-the-badge&logo=download&logoColor=white "Download zip")](https://github.com/AnxoV/ValidatorForm/archive/v1.0.zip)
<!-- END LATEST DOWNLOAD BUTTON -->

## Example
```html
<form id="form">
    <div>
        <label for="email">
            <span>Email:</span>
            <input type="email" name="email">
        </label>
    </div>
    <div>
        <label for="name">
            <span>Name:</span>
            <input type="text" name="name">
        </label>
    </div>
    <div>
        <label for="password">
            <span>Password:</span>
            <input type="password" name="password">
        </label>
    </div>
    <div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </div>
</form>
<script src="validator.js"></script>
<script>
    const validator = Validator({
        form: document.getElementById("form"),
        rules: {
            email: function(value) {
                if (value.includes("@")) {
                    return true;
                } else {
                    return false;
                }
            },
            name: function(value) {
                if (value.length > 0) {
                    return true;
                } else {
                    return false;
                }
            },
            password: function(value) {
                if (value.length >= 8) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    });

    validator.form.addEventListener("submit", function(event) {
        event.preventDefault();

        console.log(validator.validate());
    });
</script>
```
