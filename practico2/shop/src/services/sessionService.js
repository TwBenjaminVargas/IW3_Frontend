import { SESSION_KEY } from "@/config/Constants";
import { ref } from "vue";

let session = ref(getStoredSession)

function getStoredSession()
{
    const data = localStorage.getItem(SESSION_KEY);
    return data ? data : '';
}

function saveSession()
{
    localStorage.setItem(SESSION_KEY,session.value)
}

export const sessionService = 
{
    login(usr,pass)
    {
        session.value=usr;
        saveSession();

    },
    logout()
    {
        session.value='';
        saveSession();
    },

    isSessionOpen()
    {
        if(session.value)
            return true;
        return false;
    }
}