var isLoggedIn = localStorage.getItem('isLoggedIn');
var userType = localStorage.getItem('userType');

export const getLogin = () => {
    if(isLoggedIn == 'true' && userType == 'user'){
        return true;
    }
    else if(isLoggedIn == 'true' && userType == 'admin'){
        return true;
    }
    else{
        localStorage.setItem('isLoggedIn',false);
        localStorage.removeItem('userType');
        return false;
    }
}

export const getUser = () => {
    if(isLoggedIn == 'true' && userType == 'user'){
        return 'user';
    }
    else if(isLoggedIn == 'true' && userType == 'admin'){
        return 'admin';
    }
    else{
        localStorage.setItem('isLoggedIn',false);
        localStorage.removeItem('userType');
        return null;
    }
}