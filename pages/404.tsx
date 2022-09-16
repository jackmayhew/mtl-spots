import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router'
Custom404.title = "Error"

function Custom404() {
    const router = useRouter()

  return (
    <div className='error'>
    <div className='error__wrap'>
        <img className='error__img' src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
        <h1 className='error__title'>ERROR</h1>
        <p className='error__msg'>Something went wrong. We're currently working to fix it. For now, please go back or return to the homepage.</p>
        <div className="panel__row error__panel">
                <Link href="/">
                  <a className="button">
                    <h3>Homepage</h3>
                    <div className="location__icon">
                    </div>
                  </a>
                </Link>
                  <a className="button" onClick={() => router.back()}>
                    <h3>Back</h3>
                    <div className="location__icon">
                    </div>
                  </a>

              </div>
    </div>
</div>
  )
}

export default Custom404;