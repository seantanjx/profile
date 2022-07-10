export const Image = ({ title, url, thumbnail }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          title={title}
        >
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={thumbnail}
            className='img-responsive'
            alt={title}
          />{' '}
        </a>{' '}
      </div>
    </div>
  )
}