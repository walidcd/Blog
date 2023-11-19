const SocialMedia = () => {
    return ( 
        <div class="flex items-center justify-center mt-5">
        <div class="flex flex-col gap-y-10 items-center justify-center  ">
            <a href="https://www.linkedin.com/in/walid-boutahar-107639141/" aria-label="Find me on LinkedIn"
                target="_blank" rel="noopener">
                <div className="flex flex-col md:flex-row items-center justify-center gap-x-3">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 dark:text-white text-black mb-0 pb-0"  viewBox="0 5 1036 990" id="linkedin"><path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" fill="currentColor"></path></svg>
            <p> walid boutahar </p>
            </div>
            </a>
            <a href="mailto:walidboutahar19@gmail.com" aria-label="Find me on Instagram" target="_blank"
                rel="noopener">
            <div className="flex flex-col md:flex-row items-center justify-center  gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 dark:text-white text-black mb-0 pb-0" viewBox="0 0 128 96" id="email"><g data-name="Layer 2" className="mb-0 pb-0"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z" fill="currentColor"></path></g></svg>
            <p>walidboutahar19@gmail.com</p>
            </div>
            </a>
        </div>
    </div>
     );
}
 
export default SocialMedia;