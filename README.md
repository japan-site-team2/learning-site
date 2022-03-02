# learning-site
This is the Japanese learning site and IT certification material 

## Front-end part
### Introduction
It is using the Material-UI for building the front-end theme.

Reference :

https://material-ui.com/

### How to run
- Firstly, make sure you have installed the `nodejs` and `npm` (it is better if using `yarn`)
- Move to **Frontend** folder : `cd FrontEnd`
- Run `npm install`(or `npm update` if it is not the first time) to install the libraries which are based on **package.json**
- After installation finish, run `npm start` to start the front-end
- If there is no any errors, it will show something as below. 

As you see, if you want to create a production build, please use `yarn`.
Now, you can access the front-end as http://localhost:3000
```
Compiled successfully!

You can now view team2-app in the browser.       

  Local:            http://localhost:3000        
  On Your Network:  http://<your local IP>:3000        

Note that the development build is not optimized.
To create a production build, use yarn build. 
```

## Back-end part
### Introduction
We are using Laravel(version 8) for developing the backend part. It is including the Admin panel for management, authorization and API for transfering data to the Front-end

### Admin panel
[Voyager](https://voyager-docs.devdojo.com/) is simply an admin for your Laravel app. Whatever you want your app to do on the front-end is completely up to you. You are in control of your application and you can use Voyager to make your life easier by adding data, editing users, creating menus, and many other administrative tasks.

### How to run
- Firstly, make sure you have installed the `compsoser` and `php >7.3` (Laravel 8 is requiring PHP 7.3 over)
- Move to **Backend** folder : `cd Backend`
- Run `composer install`(or `composer update` if it is not the first time) to install the libraries which are based on **composer.json**
- Create .env file from .env.example file and update the .env file
  - Modify your database connection 
  - Generate application key by using command `php artisan key:generate`
*if you are using port in URL, please update the APP_URL with port num*
- After installation finish, run `php artisan migrate` to migrate tphp artisan migrate:refresh --seedhe database.
- Run `php artisan db:seed` to import the master data.
- Lastly, run `php artisan serve` to start the backend server
Starting Laravel development server: http://127.0.0.1:8000
[Thu Sep 16 07:35:53 2021] PHP 8.0.8 Development Server (http://127.0.0.1:8000) started
```
- Access the admin with url http://127.0.0.1:8000/admin (user/pass: admin@admin.com/password)
if there is no errors, it will be shown as below
```
### Login with jwt token
-php artisan key:generate
-php artisan jwt:secret
-php artisan cache:clear
-php artisan config:clear

