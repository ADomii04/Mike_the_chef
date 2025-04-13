import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { VideosComponent } from './pages/videos/videos.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"recipes", component: RecipesComponent},
    {path:"videos", component: VideosComponent},
    {path:"login", component: LoginComponent},
    {path:"signup", component: SignupComponent},
    {path:"recipes/:id", component: RecipeDetailComponent}
];
