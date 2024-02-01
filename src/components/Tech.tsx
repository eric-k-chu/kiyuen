import { Github } from ".";

export function Tech() {
  const techs = [
    { icon: <ReactIcon />, name: "React" },
    { icon: <NextJsIcon />, name: "Next.js" },
    { icon: <NodeJsIcon />, name: "Node.js" },
    { icon: <ExpressJsIcon />, name: "Express.js" },
    { icon: <PostgresqlIcon />, name: "PostgreSQL" },
    { icon: <TailwindIcon />, name: "TailwindCSS" },
    { icon: <AwsBeanstalkIcon />, name: "AWS Elastic Beanstalk" },
    { icon: <VercelIcon />, name: "Vercel" },
    { icon: <Github />, name: "Github" },
  ];
  return (
    <>
      <h1 className="text-5xl font-semibold uppercase">Tech Stack</h1>
      <div className="my-4 flex flex-wrap items-center gap-6 font-sans">
        {techs.map((n) => (
          <div
            className="flex h-[40px] items-center gap-2 rounded-md bg-zinc-700 px-2 py-1"
            key={n.name}
          >
            {n.icon}
            <h3 className="text-xl">{n.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

function ReactIcon() {
  return (
    <svg
      className="size-8"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.679 15.976c0-1.435-1.2-2.598-2.679-2.598-1.48 0-2.679 1.163-2.679 2.598 0 1.434 1.2 2.597 2.679 2.597 1.48 0 2.679-1.163 2.679-2.597Z"
        fill="#53C1DE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.7 11.154c.566-2.23 1.277-6.363-1.23-7.764-2.495-1.395-5.742 1.278-7.456 2.883-1.71-1.589-5.048-4.25-7.552-2.845-2.494 1.4-1.725 5.465-1.147 7.708-2.327.64-6.315 2.02-6.315 4.84 0 2.811 3.984 4.313 6.297 4.953-.58 2.255-1.311 6.262 1.186 7.659 2.514 1.405 5.842-1.194 7.572-2.816 1.726 1.614 4.942 4.23 7.437 2.83 2.504-1.406 1.852-5.484 1.273-7.74 2.242-.641 6.235-2.11 6.235-4.886 0-2.793-4.01-4.184-6.3-4.822Zm-.284 8.513a28.65 28.65 0 0 0-1.519-3.685 28.625 28.625 0 0 0 1.46-3.631c1.679.472 5.361 1.55 5.361 3.625 0 2.094-3.533 3.183-5.302 3.691Zm-1.566 7.859c-1.862 1.045-4.628-1.456-5.902-2.645a29.352 29.352 0 0 0 2.514-3.096 30.941 30.941 0 0 0 4.064-.607c.407 1.595 1.194 5.298-.676 6.348Zm-13.726-.015c-1.863-1.041-1.011-4.616-.584-6.278a31.04 31.04 0 0 0 4.042.568 30.55 30.55 0 0 0 2.576 3.085c-1.083 1.015-4.163 3.671-6.034 2.625ZM2.28 15.976c0-2.102 3.661-3.173 5.378-3.643a29.257 29.257 0 0 0 1.462 3.673 29.689 29.689 0 0 0-1.48 3.726c-1.637-.454-5.36-1.653-5.36-3.756ZM9.104 4.504c1.87-1.05 4.77 1.506 6.012 2.656a29.97 29.97 0 0 0-2.556 3.066c-1.41.127-2.761.33-4.003.604-.466-1.81-1.321-5.278.547-6.326Zm11.275 7.073c.957.117 1.875.273 2.736.464a26.259 26.259 0 0 1-.96 2.504 41.165 41.165 0 0 0-1.776-2.968Zm-4.365-3.529a26.999 26.999 0 0 1 1.766 2.066 38.897 38.897 0 0 0-3.546 0 27.651 27.651 0 0 1 1.78-2.066Zm-6.157 6.496a26.884 26.884 0 0 1-.954-2.517 29.762 29.762 0 0 1 2.72-.452 36.303 36.303 0 0 0-1.766 2.97Zm1.793 5.922a28.076 28.076 0 0 1-2.764-.431c.264-.83.59-1.692.972-2.568a36.306 36.306 0 0 0 1.792 2.999Zm4.4 3.525a28.142 28.142 0 0 1-1.805-2.094c1.188.045 2.378.045 3.566-.006a26.611 26.611 0 0 1-1.761 2.1Zm6.117-6.569c.4.886.739 1.744 1.007 2.559a27.97 27.97 0 0 1-2.798.462 41.028 41.028 0 0 0 1.79-3.02Zm-3.42 3.172a41.486 41.486 0 0 1-5.463.01 34.923 34.923 0 0 1-2.746-4.598 34.908 34.908 0 0 1 2.73-4.59 37.39 37.39 0 0 1 5.469 0 39.137 39.137 0 0 1 2.739 4.572 39.146 39.146 0 0 1-2.729 4.606ZM22.83 4.467c1.87 1.046 1.038 4.76.63 6.376a31.597 31.597 0 0 0-4.012-.615 29.379 29.379 0 0 0-2.536-3.069c1.258-1.175 4.066-3.728 5.918-2.692Z"
        fill="#53C1DE"
      />
    </svg>
  );
}

function NextJsIcon() {
  return (
    <svg
      className="size-8"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          d="M11.214.006c-.052.005-.216.022-.364.033-3.408.308-6.6 2.147-8.624 4.974a11.88 11.88 0 0 0-2.118 5.243c-.096.66-.108.854-.108 1.748s.012 1.089.108 1.748c.652 4.507 3.86 8.293 8.209 9.696.779.251 1.6.422 2.533.526.364.04 1.936.04 2.3 0 1.611-.179 2.977-.578 4.323-1.265.207-.105.247-.134.219-.157a211.64 211.64 0 0 1-1.955-2.62l-1.919-2.593-2.404-3.559a342.499 342.499 0 0 0-2.422-3.556c-.009-.003-.018 1.578-.023 3.51-.007 3.38-.01 3.516-.052 3.596a.426.426 0 0 1-.206.213c-.075.038-.14.045-.495.045H7.81l-.108-.068a.44.44 0 0 1-.157-.172l-.05-.105.005-4.704.007-4.706.073-.092a.644.644 0 0 1 .174-.143c.096-.047.133-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 2 2.895 4.362l4.734 7.172 1.9 2.878.097-.063a12.318 12.318 0 0 0 2.465-2.163 11.947 11.947 0 0 0 2.825-6.135c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.748C23.24 5.75 20.032 1.963 15.683.56a12.6 12.6 0 0 0-2.498-.523c-.226-.024-1.776-.05-1.97-.03Zm4.913 7.26a.473.473 0 0 1 .237.276c.018.06.023 1.365.018 4.305l-.007 4.218-.743-1.14-.746-1.14v-3.066c0-1.983.009-3.097.023-3.151a.478.478 0 0 1 .232-.296c.097-.05.132-.054.5-.054.347 0 .408.005.486.047Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function NodeJsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-auto"
      version="1.2"
      viewBox="0 0 442.37 270.929"
    >
      <defs>
        <clipPath id="a">
          <path d="M239.03 226.605l-42.13 24.317c-1.578.91-2.546 2.59-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336c1.575.907 3.517.907 5.09 0l42.126-24.336c1.57-.91 2.54-2.59 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317c-.79-.453-1.67-.68-2.55-.68-.88 0-1.76.227-2.55.68" />
        </clipPath>
        <linearGradient
          id="b"
          x1="-.348"
          x2="1.251"
          gradientTransform="rotate(116.114 53.1 202.97) scale(86.48)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".3" stopColor="#3E863D" />
          <stop offset=".5" stopColor="#55934F" />
          <stop offset=".8" stopColor="#5AAD45" />
        </linearGradient>
        <clipPath id="c">
          <path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39c-.414-.24-.863-.41-1.32-.53zm0 0" />
        </clipPath>
        <linearGradient
          id="d"
          x1="-.456"
          x2=".582"
          gradientTransform="rotate(-36.46 550.846 -214.337) scale(132.798)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".57" stopColor="#3E863D" />
          <stop offset=".72" stopColor="#619857" />
          <stop offset="1" stopColor="#76AC64" />
        </linearGradient>
        <clipPath id="e">
          <path d="M241.066 225.953c-.707.07-1.398.29-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336c1.3-.754 2.19-2.03 2.46-3.476l-46.18-78.89c-.34-.067-.68-.102-1.03-.102-.14 0-.28.007-.42.02" />
        </clipPath>
        <linearGradient
          id="f"
          x1=".043"
          x2=".984"
          gradientTransform="translate(192.862 279.652) scale(97.417)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".16" stopColor="#6BBF47" />
          <stop offset=".38" stopColor="#79B461" />
          <stop offset=".47" stopColor="#75AC64" />
          <stop offset=".7" stopColor="#659E5A" />
          <stop offset=".9" stopColor="#3E863D" />
        </linearGradient>
      </defs>
      <path
        fill="#689f63"
        d="M218.647 270.93c-1.46 0-2.91-.383-4.19-1.12l-13.337-7.896c-1.992-1.114-1.02-1.508-.363-1.735 2.656-.93 3.195-1.14 6.03-2.75.298-.17.688-.11.993.07l10.246 6.08c.37.2.895.2 1.238 0l39.95-23.06c.37-.21.61-.64.61-1.08v-46.1c0-.46-.24-.87-.618-1.1l-39.934-23.04c-.37-.22-.86-.22-1.23 0l-39.926 23.04c-.387.22-.633.65-.633 1.09v46.1c0 .44.24.86.62 1.07l10.94 6.32c5.94 2.97 9.57-.53 9.57-4.05v-45.5c0-.65.51-1.15 1.16-1.15h5.06c.63 0 1.15.5 1.15 1.15v45.52c0 7.92-4.32 12.47-11.83 12.47-2.31 0-4.13 0-9.21-2.5l-10.48-6.04c-2.59-1.5-4.19-4.3-4.19-7.29v-46.1c0-3 1.6-5.8 4.19-7.28l39.99-23.07c2.53-1.43 5.89-1.43 8.4 0l39.94 23.08c2.58 1.49 4.19 4.28 4.19 7.28v46.1c0 2.99-1.61 5.78-4.19 7.28l-39.94 23.07c-1.28.74-2.73 1.12-4.21 1.12"
      />
      <path
        fill="#689f63"
        d="M230.987 239.164c-17.48 0-21.145-8.024-21.145-14.754 0-.64.516-1.15 1.157-1.15h5.16c.57 0 1.05.415 1.14.978.78 5.258 3.1 7.91 13.67 7.91 8.42 0 12-1.902 12-6.367 0-2.57-1.02-4.48-14.1-5.76-10.94-1.08-17.7-3.49-17.7-12.24 0-8.06 6.8-12.86 18.19-12.86 12.79 0 19.13 4.44 19.93 13.98.03.33-.09.65-.31.89-.22.23-.53.37-.85.37h-5.19c-.54 0-1.01-.38-1.12-.9-1.25-5.53-4.27-7.3-12.48-7.3-9.19 0-10.26 3.2-10.26 5.6 0 2.91 1.26 3.76 13.66 5.4 12.28 1.63 18.11 3.93 18.11 12.56 0 8.7-7.26 13.69-19.92 13.69m48.66-48.89h1.34c1.1 0 1.31-.77 1.31-1.22 0-1.18-.81-1.18-1.26-1.18h-1.38zm-1.63-3.78h2.97c1.02 0 3.02 0 3.02 2.28 0 1.59-1.02 1.92-1.63 2.12 1.19.08 1.27.86 1.43 1.96.08.69.21 1.88.45 2.28h-1.83c-.05-.4-.33-2.6-.33-2.72-.12-.49-.29-.73-.9-.73h-1.51v3.46h-1.67zm-3.57 4.3c0 3.58 2.89 6.48 6.44 6.48 3.58 0 6.47-2.96 6.47-6.48 0-3.59-2.93-6.44-6.48-6.44-3.5 0-6.44 2.81-6.44 6.43m14.16.03c0 4.24-3.47 7.7-7.7 7.7-4.2 0-7.7-3.42-7.7-7.7 0-4.36 3.58-7.7 7.7-7.7 4.15 0 7.69 3.35 7.69 7.7"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M94.936 90.55c0-1.84-.97-3.53-2.558-4.445l-42.356-24.37c-.715-.42-1.516-.64-2.328-.67h-.438c-.812.03-1.613.25-2.34.67L2.562 86.105C.984 87.025 0 88.715 0 90.555l.093 65.64c0 .91.47 1.76 1.27 2.21.78.48 1.76.48 2.54 0l25.18-14.42c1.59-.946 2.56-2.618 2.56-4.44V108.88c0-1.83.97-3.52 2.555-4.43l10.72-6.174c.796-.46 1.67-.688 2.56-.688.876 0 1.77.226 2.544.687l10.715 6.172c1.586.91 2.56 2.6 2.56 4.43v30.663c0 1.82.983 3.5 2.565 4.44l25.164 14.41c.79.47 1.773.47 2.56 0 .776-.45 1.268-1.3 1.268-2.21zm199.868 34.176c0 .457-.243.88-.64 1.106l-14.548 8.386c-.395.227-.883.227-1.277 0l-14.55-8.386c-.4-.227-.64-.65-.64-1.106V107.93c0-.458.24-.88.63-1.11l14.54-8.4c.4-.23.89-.23 1.29 0l14.55 8.4c.4.23.64.652.64 1.11zM298.734.324c-.794-.442-1.76-.43-2.544.027-.78.46-1.262 1.3-1.262 2.21v65c0 .64-.34 1.23-.894 1.55-.55.32-1.235.32-1.79 0L281.634 63c-1.58-.914-3.526-.914-5.112 0l-42.37 24.453c-1.583.91-2.56 2.6-2.56 4.42v48.92c0 1.83.977 3.51 2.56 4.43l42.37 24.47c1.582.91 3.53.91 5.117 0l42.37-24.48c1.58-.92 2.56-2.6 2.56-4.43V18.863c0-1.856-1.01-3.563-2.63-4.47zm141.093 107.164c1.574-.914 2.543-2.602 2.543-4.422V91.21c0-1.824-.97-3.507-2.547-4.425l-42.1-24.44c-1.59-.92-3.54-.92-5.13 0l-42.36 24.45c-1.59.92-2.56 2.6-2.56 4.43v48.9c0 1.84.99 3.54 2.58 4.45l42.09 23.99c1.55.89 3.45.9 5.02.03l25.46-14.15c.8-.45 1.31-1.3 1.31-2.22 0-.92-.49-1.78-1.29-2.23l-42.62-24.46c-.8-.45-1.29-1.3-1.29-2.21v-15.34c0-.916.48-1.76 1.28-2.216l13.26-7.65c.79-.46 1.76-.46 2.55 0l13.27 7.65c.79.45 1.28 1.3 1.28 2.21v12.06c0 .91.49 1.76 1.28 2.22.79.45 1.77.45 2.56-.01zm0 0"
      />
      <path
        fill="#689f63"
        fillRule="evenodd"
        d="M394.538 105.2c.3-.177.676-.177.98 0l8.13 4.69c.304.176.49.5.49.85v9.39c0 .35-.186.674-.49.85l-8.13 4.69c-.304.177-.68.177-.98 0l-8.125-4.69c-.31-.176-.5-.5-.5-.85v-9.39c0-.35.18-.674.49-.85zm0 0"
      />
      <g clipPath="url(#a)" transform="translate(-78.306 -164.016)">
        <path
          fill="url(#b)"
          d="M331.363 246.793l-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"
        />
      </g>
      <g clipPath="url(#c)" transform="translate(-78.306 -164.016)">
        <path
          fill="url(#d)"
          d="M144.07 264.004l83.825 113.453 110.86-81.906-83.83-113.45zm0 0"
        />
      </g>
      <g clipPath="url(#e)" transform="translate(-78.306 -164.016)">
        <path fill="url(#f)" d="M197.02 225.934v107.43h91.683v-107.43zm0 0" />
      </g>
    </svg>
  );
}

function ExpressJsIcon() {
  return (
    <span className="select-none font-sans text-base font-medium tracking-widest">
      ex
    </span>
  );
}

function PostgresqlIcon() {
  return (
    <svg
      className="size-7"
      viewBox="-4 0 264 264"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351" />
      <path
        d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002"
        fill="#336791"
      />
      <path
        d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35m88.784.073c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225"
        fill="#FFF"
      />
      <path
        d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36Zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813Zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016ZM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426Zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34Zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526Zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25Zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772Z"
        fill="#FFF"
      />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 54 33"
      className="size-8"
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          fill="#38bdf8"
          fillRule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h54v32.4H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function AwsBeanstalkIcon() {
  return (
    <svg
      className="size-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
    >
      <linearGradient id="a" x1="0%" y1="100%" y2="0%">
        <stop offset="0" stopColor="#c8511b" />
        <stop offset="1" stopColor="#f90" />
      </linearGradient>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h80v80H0z" fill="url(#a)" />
        <path
          d="M50.487 45.96a3.005 3.005 0 0 0-2.996-3.006 3.005 3.005 0 0 0-2.996 3.007 3.005 3.005 0 0 0 2.996 3.006 3.005 3.005 0 0 0 2.996-3.006M39.5 35.939c1.652 0 2.996-1.35 2.996-3.007s-1.344-3.007-2.996-3.007c-1.651 0-2.996 1.35-2.996 3.007s1.345 3.007 2.996 3.007m-8.988 11.024c1.652 0 2.996-1.35 2.996-3.007s-1.344-3.006-2.996-3.006-2.996 1.349-2.996 3.006 1.344 3.007 2.996 3.007m21.971-1.002a5.015 5.015 0 0 1-3.995 4.91v6.114a1 1 0 0 1-.998 1.002H40.5V64h-1.997V52.976h-7.99a1 1 0 0 1-.998-1.002v-3.108a5.015 5.015 0 0 1-3.995-4.91c0-2.763 2.24-5.01 4.993-5.01s4.994 2.247 4.994 5.01a5.015 5.015 0 0 1-3.995 4.91v2.105h6.99v-13.13a5.015 5.015 0 0 1-3.994-4.909c0-2.763 2.24-5.011 4.993-5.011s4.994 2.248 4.994 5.011a5.015 5.015 0 0 1-3.995 4.91v18.14h5.992V50.87a5.015 5.015 0 0 1-3.995-4.91c0-2.763 2.24-5.01 4.994-5.01s4.993 2.247 4.993 5.01M67 41.013c0 7.343-5.456 9.96-10.561 9.96v-2.005c2.575 0 8.564-.776 8.564-7.955 0-5.372-4.071-7.32-7.485-8.007a1 1 0 0 1-.801-.923c-.248-4.207-2.69-5.7-4.71-5.7-1.363 0-2.643.652-3.509 1.79a.999.999 0 0 1-1.732-.262c-.781-2.13-1.904-3.917-3.337-5.308-3.682-3.582-8.718-4.555-13.474-2.597-3.949 1.613-7.04 6.278-7.04 10.621 0 .48.028.962.087 1.433.062.504-.26.975-.75 1.097-2.337.58-6.255 2.362-6.255 7.78 0 .206.01.402.02.588.233 4.172 3.916 7.443 8.385 7.443h1.118v2.004h-1.118c-5.527 0-10.087-4.101-10.38-9.338a13.936 13.936 0 0 1-.022-.696c0-6.297 4.351-8.65 6.94-9.49a13.28 13.28 0 0 1-.023-.821c0-5.184 3.561-10.548 8.284-12.476 5.509-2.266 11.348-1.142 15.617 3.012 1.314 1.274 2.396 2.824 3.23 4.622a6.285 6.285 0 0 1 3.96-1.407c2.959 0 6.069 2.119 6.635 6.826C64.04 32.524 67 35.985 67 41.012"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg
      className="size-6"
      data-testid="geist-icon"
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2L2 19.7778H22L12 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
