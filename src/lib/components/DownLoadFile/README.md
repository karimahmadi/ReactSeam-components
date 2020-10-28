      <DownLoadFile
        url='/pdf'
        authorization={`Bearer ${localStorage.getItem('Auth-Token')}`}
        responseType="blob"
        fileType="application/pdf"
      >
        open new tab
      </DownLoadFile>

      <DownLoadFile
        download
        url='/pdf'
        authorization={`Bearer ${localStorage.getItem('Auth-Token')}`}
        responseType="blob"
        fileName="myPdfFile.pdf"
      >
        download file
      </DownLoadFile>
