import React from 'react'

export const FavoriteVideos = () => (
    <svg id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
    </svg>
)

export const SearchVideosIcon = () => (
    <svg id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle cx="14" cy="14" r="12" />
        <path d="M23 23 L30 30"  />
    </svg>
)

export const ThumbUp = () => 
    <svg style={{width:"24px", height: "24px"}} viewBox="0 0 24 24">
        <path fill="#5e5e5e" d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
    </svg>

export const ThumbDown = () => 
    <svg style={{width:"24px", height: "24px"}} viewBox="0 0 24 24">
        <path fill="#5e5e5e" d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z" />
    </svg>

export const Back = () => 
    <svg style={{width:"24px", height: "24px"}} viewBox="0 0 24 24">
        <path fill="#ffffff" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </svg>

export const InfinityLogo = () =>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="1.8016494845361137 5.517938144329894 640.0199999999999 294" width="100%" height="100%"><defs>
        <path d="M348.84 97.27C350.77 94.88 353.59 91.37 357.46 86.96C365.25 78.2 377.18 65.54 395.08 52.54C404.05 46.11 414.5 39.59 426.65 33.96C438.77 28.28 452.59 23.48 467.85 20.49C475.48 18.99 483.44 17.92 491.7 17.38C493.85 17.28 496.01 17.16 498.19 17.06C500.22 17.06 502.07 16.99 504.29 17.06C509 17.22 513.42 17.56 517.89 18.21C535.79 20.73 553.99 27.04 571.1 37.35C588.21 47.58 604.31 61.96 616.81 80.65C623.01 90 628.18 100.44 631.97 111.67C635.79 122.88 637.96 134.92 638.61 147.14C639.94 171.04 635.1 197.3 622.62 220.23C616.5 231.76 608.52 242.35 599.34 251.76C590.07 261.08 579.59 269.23 568.16 275.86C556.74 282.51 544.42 287.74 531.43 291.3C524.92 293.04 518.26 294.47 511.44 295.32C508.02 295.72 504.59 296.12 501.1 296.26C500.93 296.26 500.06 296.31 498.49 296.38L497.84 296.42L496.87 296.43L495.78 296.45L493.6 296.5L492.49 296.52C491.67 296.5 491.22 296.49 491.13 296.49C489.32 296.44 487.4 296.43 485.69 296.34C485.18 296.31 481.08 296.05 480.57 296.02C477.16 295.75 473.76 295.38 470.37 294.92C463.59 293.94 456.87 292.59 450.25 290.88C437.02 287.44 424.25 282.51 412.09 276.58C387.76 264.62 365.89 248.7 346.55 230.48C336.83 221.4 327.8 211.66 319.27 201.5C314.96 196.44 310.9 191.18 306.92 185.79C302.94 180.36 299.14 174.98 295.24 168.91C295.09 168.67 294.35 167.49 293.01 165.36C291.7 163.35 290.97 162.24 290.82 162.01C289.31 159.75 287.72 157.47 286.1 155.19C282.92 150.6 279.53 146.1 276.12 141.61C269.26 132.65 262.08 123.96 254.65 115.61C239.69 99.05 223.59 83.83 205.93 72.11C188.38 60.29 169.14 52.38 149.6 50.09C147.16 49.82 144.71 49.58 142.27 49.48C142.22 49.48 141.86 49.45 141.81 49.45C142.74 49.42 141.76 49.44 141.82 49.43C141.75 49.43 141.39 49.43 140.73 49.43L138.56 49.42C137.91 49.42 137.55 49.41 137.48 49.41C137.09 49.41 136.75 49.41 136.53 49.43C136.38 49.43 135.15 49.49 134.99 49.5C133.06 49.51 130.51 49.8 128.2 50.02C125.83 50.35 123.46 50.66 121.09 51.16C111.63 53 102.27 56.23 93.49 60.59C75.9 69.29 60.49 82.34 49.83 98.05C44.5 105.91 40.3 114.4 37.42 123.24C36.78 125.48 36.01 127.68 35.54 129.95C35.48 130.17 35.21 131.3 34.73 133.33C34.36 135.38 34.16 136.52 34.12 136.75C33.62 139.02 33.49 141.34 33.16 143.62C33 144.77 33 145.93 32.91 147.09C32.9 147.2 32.86 147.78 32.79 148.82L32.73 149.69C32.71 149.95 32.7 150.09 32.7 150.12C32.68 149.35 32.7 150.19 32.69 150.15C32.69 150.41 32.68 151.75 32.68 154.15C32.68 155.34 32.68 156 32.68 156.14C32.67 156.82 32.74 157.23 32.75 157.79C32.88 159.9 32.91 161.96 33.23 164.29C33.25 164.52 33.38 165.64 33.6 167.67C33.94 169.69 34.13 170.81 34.17 171.03C34.48 173.28 35.09 175.44 35.56 177.65C37.69 186.39 41.15 194.7 45.42 202.45C54.06 217.9 66.33 230.82 79.94 240.52C93.59 250.21 108.56 256.96 123.33 260.22C127.02 261.03 130.7 261.71 134.34 262.07C136.16 262.31 137.96 262.44 139.76 262.52C139.85 262.53 140.3 262.55 141.11 262.6C141.31 262.61 141.42 262.62 141.44 262.62C141.49 262.63 141.82 262.64 141.62 262.64C141.67 262.64 141.92 262.65 142.36 262.65L145.3 262.68L148.21 262.71C149.82 262.67 150.71 262.65 150.88 262.64C152.66 262.61 154.43 262.57 156.24 262.43C159.84 262.26 163.38 261.91 166.85 261.51C194.7 258.07 217.73 247.71 235.12 236.9C252.56 225.99 264.7 214.78 272.65 206.93C276.61 202.98 279.52 199.8 281.49 197.66C283.42 195.48 284.41 194.37 284.41 194.37C284.42 194.36 284.47 194.3 284.48 194.3C286.43 192.11 289.74 191.95 291.87 193.96C293.94 195.89 294.13 199.15 292.37 201.35C292.37 201.35 291.39 202.56 289.49 204.93C287.55 207.28 284.67 210.73 280.71 215.09C272.78 223.71 260.62 236.14 242.52 248.78C233.45 255.03 222.9 261.34 210.68 266.69C198.48 272.06 184.65 276.63 169.41 279.28C165.6 279.94 161.72 280.55 157.75 280.97C155.79 281.24 153.75 281.41 151.67 281.57C151.47 281.58 150.43 281.67 148.56 281.81L145.63 281.96L142.69 282.09L141.95 282.13L140.98 282.14C140.01 282.14 139.47 282.14 139.36 282.14C137.2 282.16 135.02 282.13 132.83 281.98C128.46 281.79 124.06 281.25 119.64 280.54C101.95 277.68 84.12 270.85 67.38 260.36C59 255.12 50.96 248.82 43.47 241.54C36 234.24 29.01 225.98 23.12 216.59C17.23 207.23 12.21 196.88 8.72 185.74C7.93 182.93 6.99 180.15 6.39 177.26C6.32 176.97 5.99 175.53 5.39 172.94C4.92 170.3 4.66 168.84 4.61 168.54C4.05 165.7 3.73 162.48 3.39 159.32C3.32 158.57 3.21 157.66 3.18 157.03C3.17 156.89 3.13 156.23 3.07 155.03C2.93 152.64 2.85 151.31 2.83 151.05C2.82 150.68 2.81 151.18 2.8 150.09C2.8 150.05 2.8 149.86 2.8 149.52L2.8 148.39C2.8 147.02 2.8 146.26 2.8 146.11C2.82 144.59 2.76 143.07 2.87 141.55C3.08 138.5 3.13 135.42 3.56 132.37C3.59 132.06 3.78 130.53 4.11 127.77C4.58 125.01 4.84 123.48 4.9 123.17C5.37 120.1 6.16 117.07 6.87 114.02C10 101.88 14.95 90.06 21.42 79.13C34.42 57.21 53.42 38.97 75.82 26C87.04 19.53 99.2 14.36 112.15 10.94C115.38 10.05 118.67 9.37 121.99 8.7C125.39 8.13 128.56 7.56 132.41 7.22C132.69 7.19 134.92 6.98 135.19 6.95C136.2 6.85 136.72 6.85 137.5 6.79C137.64 6.78 138.37 6.74 139.67 6.67C140.32 6.63 140.69 6.61 140.76 6.61C141.19 6.59 140.56 6.58 141.86 6.56C141.92 6.56 142.42 6.56 142.49 6.56C145.85 6.49 149.21 6.51 152.58 6.62C166.07 7.09 179.46 9.53 192.43 13.12C198.92 14.94 205.3 17.13 211.53 19.61C217.78 22.05 223.91 24.8 229.89 27.79C253.79 39.85 275.48 55.6 294.82 73.59C304.53 82.57 313.64 92.15 322.19 102.25C330.71 112.36 338.85 122.95 346.24 134.6C348.97 138.89 352.23 143.58 355.5 148.04C358.81 152.55 362.26 156.97 365.72 161.41C372.68 170.22 380.07 178.64 387.63 186.75C402.88 202.78 419.24 217.3 436.95 228.23C445.79 233.69 454.96 238.21 464.32 241.59C469 243.28 473.73 244.68 478.5 245.73C480.89 246.26 483.28 246.7 485.68 247.1C485.91 247.13 487.11 247.3 489.27 247.6L492.55 247.97L493.35 248.06L494.44 248.12L496.61 248.24C497.27 248.29 497.63 248.31 497.7 248.31C497.69 248.32 498.48 248.34 497.82 248.34C497.85 248.34 498 248.34 498.26 248.34C499.3 248.36 499.88 248.37 500 248.37C502.31 248.46 504.66 248.34 507 248.25C511.7 248 516.43 247.32 521.11 246.42C530.48 244.56 539.67 241.41 548.24 237.18C565.44 228.76 580.08 215.93 589.8 200.31C594.77 192.56 598.37 184.06 600.9 175.23C601.59 173.04 601.98 170.76 602.56 168.53C602.95 166.3 603.41 163.94 603.72 161.79C603.75 161.57 603.88 160.52 604.11 158.61L604.32 157.03L604.45 155.05L604.69 151.04C604.73 150.44 604.75 150.1 604.75 150.03C604.77 149.43 604.77 150.28 604.76 150.04C604.76 150.01 604.76 149.87 604.77 149.62C604.77 148.6 604.78 148.03 604.78 147.92C604.89 138.86 603.92 129.9 601.63 121.37C599.36 112.84 596.01 104.68 591.71 97.12C583.04 82.05 570.88 69.39 557.3 59.97C543.75 50.47 528.81 44.12 514.18 41.02C510.51 40.22 506.83 39.72 503.52 39.33C501.74 39.14 499.58 39.07 497.65 38.93C495.87 38.9 494.1 38.87 492.34 38.83C484.98 38.81 477.81 39.27 470.92 40.15C443.23 43.59 420.27 54 402.91 64.81C385.5 75.74 373.34 86.95 365.38 94.79C361.4 98.76 358.48 101.94 356.55 104.04C354.57 106.25 353.56 107.39 353.56 107.39C351.73 109.46 348.61 109.61 346.59 107.73C344.68 105.95 344.48 102.91 346.08 100.84C346.63 100.13 347.02 99.63 348.84 97.27Z" id="a2S9xKGW6f" /></defs><g><g><use xlinkHref="#a2S9xKGW6f" opacity="1" fill="#00393a" fillOpacity="1"></use><g><use xlinkHref="#a2S9xKGW6f" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="0"></use></g></g></g>
    </svg>

export const InfinityLogoWhite = () => 
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="1.8016494845361137 5.517938144329894 640.0199999999999 294" width="100%" height="100%"><defs>
        <path d="M348.84 97.27C350.77 94.88 353.59 91.37 357.46 86.96C365.25 78.2 377.18 65.54 395.08 52.54C404.05 46.11 414.5 39.59 426.65 33.96C438.77 28.28 452.59 23.48 467.85 20.49C475.48 18.99 483.44 17.92 491.7 17.38C493.85 17.28 496.01 17.16 498.19 17.06C500.22 17.06 502.07 16.99 504.29 17.06C509 17.22 513.42 17.56 517.89 18.21C535.79 20.73 553.99 27.04 571.1 37.35C588.21 47.58 604.31 61.96 616.81 80.65C623.01 90 628.18 100.44 631.97 111.67C635.79 122.88 637.96 134.92 638.61 147.14C639.94 171.04 635.1 197.3 622.62 220.23C616.5 231.76 608.52 242.35 599.34 251.76C590.07 261.08 579.59 269.23 568.16 275.86C556.74 282.51 544.42 287.74 531.43 291.3C524.92 293.04 518.26 294.47 511.44 295.32C508.02 295.72 504.59 296.12 501.1 296.26C500.93 296.26 500.06 296.31 498.49 296.38L497.84 296.42L496.87 296.43L495.78 296.45L493.6 296.5L492.49 296.52C491.67 296.5 491.22 296.49 491.13 296.49C489.32 296.44 487.4 296.43 485.69 296.34C485.18 296.31 481.08 296.05 480.57 296.02C477.16 295.75 473.76 295.38 470.37 294.92C463.59 293.94 456.87 292.59 450.25 290.88C437.02 287.44 424.25 282.51 412.09 276.58C387.76 264.62 365.89 248.7 346.55 230.48C336.83 221.4 327.8 211.66 319.27 201.5C314.96 196.44 310.9 191.18 306.92 185.79C302.94 180.36 299.14 174.98 295.24 168.91C295.09 168.67 294.35 167.49 293.01 165.36C291.7 163.35 290.97 162.24 290.82 162.01C289.31 159.75 287.72 157.47 286.1 155.19C282.92 150.6 279.53 146.1 276.12 141.61C269.26 132.65 262.08 123.96 254.65 115.61C239.69 99.05 223.59 83.83 205.93 72.11C188.38 60.29 169.14 52.38 149.6 50.09C147.16 49.82 144.71 49.58 142.27 49.48C142.22 49.48 141.86 49.45 141.81 49.45C142.74 49.42 141.76 49.44 141.82 49.43C141.75 49.43 141.39 49.43 140.73 49.43L138.56 49.42C137.91 49.42 137.55 49.41 137.48 49.41C137.09 49.41 136.75 49.41 136.53 49.43C136.38 49.43 135.15 49.49 134.99 49.5C133.06 49.51 130.51 49.8 128.2 50.02C125.83 50.35 123.46 50.66 121.09 51.16C111.63 53 102.27 56.23 93.49 60.59C75.9 69.29 60.49 82.34 49.83 98.05C44.5 105.91 40.3 114.4 37.42 123.24C36.78 125.48 36.01 127.68 35.54 129.95C35.48 130.17 35.21 131.3 34.73 133.33C34.36 135.38 34.16 136.52 34.12 136.75C33.62 139.02 33.49 141.34 33.16 143.62C33 144.77 33 145.93 32.91 147.09C32.9 147.2 32.86 147.78 32.79 148.82L32.73 149.69C32.71 149.95 32.7 150.09 32.7 150.12C32.68 149.35 32.7 150.19 32.69 150.15C32.69 150.41 32.68 151.75 32.68 154.15C32.68 155.34 32.68 156 32.68 156.14C32.67 156.82 32.74 157.23 32.75 157.79C32.88 159.9 32.91 161.96 33.23 164.29C33.25 164.52 33.38 165.64 33.6 167.67C33.94 169.69 34.13 170.81 34.17 171.03C34.48 173.28 35.09 175.44 35.56 177.65C37.69 186.39 41.15 194.7 45.42 202.45C54.06 217.9 66.33 230.82 79.94 240.52C93.59 250.21 108.56 256.96 123.33 260.22C127.02 261.03 130.7 261.71 134.34 262.07C136.16 262.31 137.96 262.44 139.76 262.52C139.85 262.53 140.3 262.55 141.11 262.6C141.31 262.61 141.42 262.62 141.44 262.62C141.49 262.63 141.82 262.64 141.62 262.64C141.67 262.64 141.92 262.65 142.36 262.65L145.3 262.68L148.21 262.71C149.82 262.67 150.71 262.65 150.88 262.64C152.66 262.61 154.43 262.57 156.24 262.43C159.84 262.26 163.38 261.91 166.85 261.51C194.7 258.07 217.73 247.71 235.12 236.9C252.56 225.99 264.7 214.78 272.65 206.93C276.61 202.98 279.52 199.8 281.49 197.66C283.42 195.48 284.41 194.37 284.41 194.37C284.42 194.36 284.47 194.3 284.48 194.3C286.43 192.11 289.74 191.95 291.87 193.96C293.94 195.89 294.13 199.15 292.37 201.35C292.37 201.35 291.39 202.56 289.49 204.93C287.55 207.28 284.67 210.73 280.71 215.09C272.78 223.71 260.62 236.14 242.52 248.78C233.45 255.03 222.9 261.34 210.68 266.69C198.48 272.06 184.65 276.63 169.41 279.28C165.6 279.94 161.72 280.55 157.75 280.97C155.79 281.24 153.75 281.41 151.67 281.57C151.47 281.58 150.43 281.67 148.56 281.81L145.63 281.96L142.69 282.09L141.95 282.13L140.98 282.14C140.01 282.14 139.47 282.14 139.36 282.14C137.2 282.16 135.02 282.13 132.83 281.98C128.46 281.79 124.06 281.25 119.64 280.54C101.95 277.68 84.12 270.85 67.38 260.36C59 255.12 50.96 248.82 43.47 241.54C36 234.24 29.01 225.98 23.12 216.59C17.23 207.23 12.21 196.88 8.72 185.74C7.93 182.93 6.99 180.15 6.39 177.26C6.32 176.97 5.99 175.53 5.39 172.94C4.92 170.3 4.66 168.84 4.61 168.54C4.05 165.7 3.73 162.48 3.39 159.32C3.32 158.57 3.21 157.66 3.18 157.03C3.17 156.89 3.13 156.23 3.07 155.03C2.93 152.64 2.85 151.31 2.83 151.05C2.82 150.68 2.81 151.18 2.8 150.09C2.8 150.05 2.8 149.86 2.8 149.52L2.8 148.39C2.8 147.02 2.8 146.26 2.8 146.11C2.82 144.59 2.76 143.07 2.87 141.55C3.08 138.5 3.13 135.42 3.56 132.37C3.59 132.06 3.78 130.53 4.11 127.77C4.58 125.01 4.84 123.48 4.9 123.17C5.37 120.1 6.16 117.07 6.87 114.02C10 101.88 14.95 90.06 21.42 79.13C34.42 57.21 53.42 38.97 75.82 26C87.04 19.53 99.2 14.36 112.15 10.94C115.38 10.05 118.67 9.37 121.99 8.7C125.39 8.13 128.56 7.56 132.41 7.22C132.69 7.19 134.92 6.98 135.19 6.95C136.2 6.85 136.72 6.85 137.5 6.79C137.64 6.78 138.37 6.74 139.67 6.67C140.32 6.63 140.69 6.61 140.76 6.61C141.19 6.59 140.56 6.58 141.86 6.56C141.92 6.56 142.42 6.56 142.49 6.56C145.85 6.49 149.21 6.51 152.58 6.62C166.07 7.09 179.46 9.53 192.43 13.12C198.92 14.94 205.3 17.13 211.53 19.61C217.78 22.05 223.91 24.8 229.89 27.79C253.79 39.85 275.48 55.6 294.82 73.59C304.53 82.57 313.64 92.15 322.19 102.25C330.71 112.36 338.85 122.95 346.24 134.6C348.97 138.89 352.23 143.58 355.5 148.04C358.81 152.55 362.26 156.97 365.72 161.41C372.68 170.22 380.07 178.64 387.63 186.75C402.88 202.78 419.24 217.3 436.95 228.23C445.79 233.69 454.96 238.21 464.32 241.59C469 243.28 473.73 244.68 478.5 245.73C480.89 246.26 483.28 246.7 485.68 247.1C485.91 247.13 487.11 247.3 489.27 247.6L492.55 247.97L493.35 248.06L494.44 248.12L496.61 248.24C497.27 248.29 497.63 248.31 497.7 248.31C497.69 248.32 498.48 248.34 497.82 248.34C497.85 248.34 498 248.34 498.26 248.34C499.3 248.36 499.88 248.37 500 248.37C502.31 248.46 504.66 248.34 507 248.25C511.7 248 516.43 247.32 521.11 246.42C530.48 244.56 539.67 241.41 548.24 237.18C565.44 228.76 580.08 215.93 589.8 200.31C594.77 192.56 598.37 184.06 600.9 175.23C601.59 173.04 601.98 170.76 602.56 168.53C602.95 166.3 603.41 163.94 603.72 161.79C603.75 161.57 603.88 160.52 604.11 158.61L604.32 157.03L604.45 155.05L604.69 151.04C604.73 150.44 604.75 150.1 604.75 150.03C604.77 149.43 604.77 150.28 604.76 150.04C604.76 150.01 604.76 149.87 604.77 149.62C604.77 148.6 604.78 148.03 604.78 147.92C604.89 138.86 603.92 129.9 601.63 121.37C599.36 112.84 596.01 104.68 591.71 97.12C583.04 82.05 570.88 69.39 557.3 59.97C543.75 50.47 528.81 44.12 514.18 41.02C510.51 40.22 506.83 39.72 503.52 39.33C501.74 39.14 499.58 39.07 497.65 38.93C495.87 38.9 494.1 38.87 492.34 38.83C484.98 38.81 477.81 39.27 470.92 40.15C443.23 43.59 420.27 54 402.91 64.81C385.5 75.74 373.34 86.95 365.38 94.79C361.4 98.76 358.48 101.94 356.55 104.04C354.57 106.25 353.56 107.39 353.56 107.39C351.73 109.46 348.61 109.61 346.59 107.73C344.68 105.95 344.48 102.91 346.08 100.84C346.63 100.13 347.02 99.63 348.84 97.27Z" id="a2S9xKGW6f" /></defs><g><g><use xlinkHref="#a2S9xKGW6f" opacity="1" fill="#f1f1f1" fillOpacity="1"></use><g><use xlinkHref="#a2S9xKGW6f" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="0"></use></g></g></g>
    </svg>