function DetailPage() {
    return(
        <>
        <div className='detailgif'>
           
            <img src={gifs.images.original.url}/>
            <p><strong>Gif Title: </strong>{gifs.title}</p>
            {/* // MAKES SURE TO CHECK THAT THE GIF USER HAS THE AVATAR, USERNAME, AND PROFILE URL BEFORE RENDERING IT  */}
            {gifs.user && (
                <>
                <p><strong>User Avatar: </strong>{gifs.user.avatar_url}</p>
                <p><strong>User username: </strong>{gifs.user.username}</p>
                <p><strong>User Profile Url: </strong>{gifs.user.profile_url}</p>
                
                </>
            

            )}
            </div>
        </>
    )
}

export default DetailPage