import { useEffect, useState } from 'react'

const BookExplorer = () => {
    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [languages, setLanguages] = useState([])
    const [language, setLanguage] = useState('all')
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('none')

    useEffect(()=>{
        fetch('https://gutendex.com/books/')
        .then(res=>res.json())
        .then(data=>{
            setBooks(data.results)
            setFilteredBooks(data.results)
            setLanguages([...new Set(data.results.map(b=>b.languages[0]))])
        })
    },[])

        // Logic
        useEffect(()=>{
            let result = [...books];
    
            if(language!=='all'){
                result = result.filter(b=>b.languages[0] === language)
            }
    
            if(search.trim()!==""){
                result = result.filter(b=>b.title.toLowerCase().includes(search.toLowerCase()) || b.authors[0].name.toLowerCase().includes(search.toLowerCase()))
            }
    
            if(sort === 'low-high'){
                result.sort((a,b)=>a.download_count - b.download_count)
            }
            else if(sort === 'high-low'){
                result.sort((a,b)=>b.download_count-a.download_count)
            }
    
            setFilteredBooks(result)
        },[search, language, sort, books])
    
      return (
        <div className='container my-4'>
            <h1 className='text-center mb-4'>Public Domain Book Explorer</h1>
    
            <div className='row mb-4'>
                <div className='col-md-4'>
                    <input type='text' className='form-control' placeholder='Serach Book by title or author name' 
                    value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
                <div className='col-md-4'>
                    <select className='form-select' value={language} 
                    onChange={(e)=>setLanguage(e.target.value)}>
                        <option value="all">All Languages</option>
                        {
                            languages.map((l,i)=>(
                                <option key={i} value={l}>{l}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='col-md-4'>
                    <select className='form-select' value={sort} onChange={(e)=>setSort(e.target.value)}>
                        <option value="none">Sort by Download Count</option>
                        <option value="low-high">Low to High</option>
                        <option value="high-low">High to Low</option>
                    </select>
                </div>
            </div>
    
            <div className='row'>
                {filteredBooks.map((book)=>(
                    <div key={book.id} className='col-md-4 mb-4'>
                        <div className='card h-100 shadow-sm'>
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title'>{book.title}</h5>
                                <h6 className='card-text'>Author: {book.authors[0].name}</h6>
                                <p className='card-text text-truncate'><b>Summary:</b> {book.summaries[0]}</p>
                                <div className='mt-auto'>
                                    <p className='fw-bold text-success'>Download Count: {book.download_count}</p>
                                    <button className='btn btn-primary w-100'>
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {filteredBooks.length===0 && (
                    <p className='text-center text-muted'>No books found</p>
                    )}
            </div>
        </div>
      )
    }

export default BookExplorer