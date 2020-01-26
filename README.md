# Basic setup
1. Download and install NodeJS from https://nodejs.org/en/download/
2. Install Angular CLI by running following command in CMD: npm install -g @angular/cli
3. Navigate to the desired folder and run: ng new name_of_your_app
4. During creation process you will be promted to choose:
  -if you want to add Angular routing (I have decided to add it later)
  -what stylesheet format you would like to use (I have picked CSS)
5. After creatin process is finished you can run development server by navigating to your app folder and runing: ng serve
6. You can check your app at http://localhost:4200

# Installing bootstrap
1. Run npm install --save bootstrap@3 (I have used Bootstrap 3 for this project)
2. Open angular.json file and add node_modules/bootstrap/dist/css/boostrap.min.css to styles[] array

# Adding Angular routing module
1. Run ng generate module app-routing --flat --module=app (--flat for installing in src/app folder, --module=app for registering in imports[] in AppModule)
2. Inside app.routing.module.ts change @NgModule to: 
   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
3. We can now declare our routes:
   const routes: Routes = [
     { path: 'path', component: component-name }
   ];
4. Place <router-outlet></router-outlet> in html template

# Installing ngx-toastr (I have choose it to display styled allerts after certain interaction with jsonplaceholder API)
1. Run npm install ngx-toastr --save
2. Run npm install @angular/animations --save (angular animations are required for default toast)
3. Register toastr css in angular.json styles[] by adding node_modules/ngx-toastr/toastr.css
4. Add BrowserAnimationModule and ToastrModule.forRoot() to app NgModule imports[] 

# Generating components, services, model classes, interfaces
1. To generate component run: ng generate component component-name
2. To generate class run: ng generate class class-name
3. To generate service run: ng generate service service-name
4. To generate interface run: ng generate interface interface-name

# Working with components
1. Components are added to other components html template by special tags with their specified selector property
   (in my app-component template I have two child components <app-post></app-post> and <app-comment></app-comment>)
2. We can write specific CSS for specific component inside component-name.css file

# Working with services
1. For this project I have used services for communication with jasonplaceholder API using HttpClient methods to send requests (get, post, put, delete)
2. In components I was accessing necesary services by injecting them into components constructor method
