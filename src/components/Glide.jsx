const GlideComponent = ({children}) => {
    return (
        <>
            <div className='glide'>
                <div className='glide__track' data-glide-el='track'>
                    <ul className='glide__slides'>
                        {children}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default GlideComponent;