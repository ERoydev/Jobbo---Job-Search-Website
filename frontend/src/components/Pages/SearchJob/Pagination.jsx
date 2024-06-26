export default function Pagination ({
    totalPosts,
    postPerPage,
    setCurrentPage,
    currentPage,
}) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i ++) {
        pages.push(i)
    }

    return (
        <div className="pagination-btn-container">
            {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => setCurrentPage(page)} className=
                    {page == currentPage ? 'active' : ''}>{page}</button>;
                })
            }

        </div>
    );
}