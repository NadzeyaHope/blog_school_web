export default (params)=>{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="green">
        <div class="container green-blog">
            <nav>
                <div class="logo">
                    <a href="#">Your blog</a>
                </div>
                <div class="menu">
                    <a href="#">Home</a>
                    <a href="#">Blog</a>
                    <a href="#">About us</a>
                </div>
                <div class="auth">
                    <a href="#">Log in</a>
                    <a href="#">Sign up</a>
                </div>
            </nav>

            <h1 class="space-lg">Untitled blog</h1>
            <p class="space-sm">Tool and strategies modern teams need to help their companies grow.</p>

            <form>
                <input class="space-sm" type="email" placeholder="Enter your email">
                <button>Submit</button>
            </form>
        </div>
    </section> 
    ${params}
    </body>
</html>
    `
}