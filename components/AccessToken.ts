// export const ACC_TOKEN = localStorage.getItem('accessToken')    

export const headers = {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
}