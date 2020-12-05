      <DownLoadFile
        url='/pdf'
        authorization={`Bearer ${localStorage.getItem('Auth-Token')}`}
        responseType="blob"
        fileType="application/pdf"
        isValid={handleIsValidFunction}
      >
        open new tab
      </DownLoadFile>

      <DownLoadFile
        download
        url='/pdf'
        authorization={`Bearer ${localStorage.getItem('Auth-Token')}`}
        responseType="blob"
        fileName="myPdfFile.pdf"
        isValid={handleIsValidFunction}
      >
        download file
      </DownLoadFile>
