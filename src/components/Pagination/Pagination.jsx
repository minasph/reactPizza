import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';


const Pagination = () => {
  return (
      <div>
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
      </div>
  )
}

export default Pagination;