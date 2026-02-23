const Pagination = ({ currentPage, totalPages, setCurrentPage}) => {
  return (
    <div style={{
      margin: '30px 0',
     display: 'flex',
      justifyContent: 'center',
      gap: '10px',
       flexWrap: 'wrap'}}>
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              fontWeight: currentPage === page ? 'bold' : 'normal',
              background: currentPage === page ? '#007bff' : '#eee',
              color: currentPage === page ? 'white' : 'black',
              minWidth: '30px',
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              cursor: 'pointer'
            }}
          >
            {page}
          </button>
        )
      })}
      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        >
        Next    
        </button>
    </div>
  );
};

export default Pagination 