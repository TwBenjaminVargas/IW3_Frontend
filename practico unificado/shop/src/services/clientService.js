
import { ref } from "vue";
import { CLIENTS_LIST_KEY } from "@/config/Constants";

let clients = ref(getStoredClientsList());

function getStoredClientsList() 
{
    const data = localStorage.getItem(CLIENTS_LIST_KEY);
    return data ? JSON.parse(data) : [];
}

function saveClientList()
{
    localStorage.setItem(CLIENTS_LIST_KEY, JSON.stringify(clients.value));
}

export const clientService = 
{
    saveClientData(client)
    {
        clients.value.push(client);
        saveClientList();
    }


}

