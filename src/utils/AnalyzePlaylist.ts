// 注释助手

/* 
    ablum: https://api.spotify.com/v1/albums/{id}
    playlists: https://api.spotify.com/v1/playlists/{playlist_id}

*/
const AnalyzePlaylist = async (id: string, category: string) => {
    const token = `Bearer 1POdFZRZbvb...qqillRxMr2z`
    console.log('test111')
    const result = await fetch(`https://api.spotify.com/v1/${category}/${id}`,
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
    
}

export default AnalyzePlaylist