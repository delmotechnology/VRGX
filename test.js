var JsonDataKeys =
{
    AD_ENABLED                  : "ad_enabled",
    AD_SEQUENCE_ID              : "ad_sequenceId",
    AD_LAST_SEQUENCE_ID         : "ad_lastSequenceId",
    AD_PLACEMENT_ID             : "ad_placementId",
    AD_ADS                      : "ad_ads",
    AD_TYPE                     : "ad_type",
    AD_ID                       : "ad_id",
    AD_GUID                     : "ad_guid",
    AD_DETECTED_HDMI_DEV_NAME   : "ad_detectedHdmiDevName",
    AD_SPONSORED_ROW_TITLE      : "ad_sponsoredRowTitle",
    AD_EXPIRE_TIME              : "ad_expireTime",
    AD_ROTATION_INTERVAL        : "ad_rotationInterval",
    AD_REFRESH_INTERVAL         : "ad_refreshInterval",
    AD_IMPRESSION_DELAY         : "ad_impressionDelay",
    AD_CREATIVES                : "ad_creatives",
    AD_CREATIVE                 : "ad_creative",
    CREATIVE_ID                 : "cre_id",
    CREATIVE_TEXT               : "cre_text",
    CREATIVE_TEXT2              : "cre_text2",
    CREATIVE_TRACKING_EVENTS    : "cre_trackingEvents",
    CREATIVE_INTERACTION_EVENTS : "cre_interactionEvents",
    CREATIVE_RESOURCES          : "cre_resources",
    CREATIVE_TRACKING_DETAIL_EVENTS    : "cre_trackingDetailEvents",
    CREATIVE_INTERACTION_DETAIL_EVENTS : "cre_interactionDetailEvents",
    RESOURCE_TYPE                      : "res_type",
    RESOURCE_URL                       : "res_url",
    RESOURCE_WIDTH                     : "res_width",
    RESOURCE_HEIGHT                    : "res_height",
    ADDITIONAL_PARAM                   : "additional_param"
};

var rowdata = "{\"ad_ads\" : [{\"ad_creatives\" : [{\"cre_id\" : \"35323\",\"cre_interactionEvents\" : [ \"clickaction\" ],\"cre_resources\" : [{\"res_height\" : \"270\",\"res_type\" : \"acceleratorimage\",\"res_url\" : \"https://d37ju0xanoz6gh.cloudfront.net/image-8814643719622277461.jpg\",\"res_width\" : \"480\"},{\"res_height\" : \"\",\"res_onhover\" : \"0\",\"res_type\" : \"acceleratorvideo\",\"res_url\" : \"http://d37ju0xanoz6gh.cloudfront.net/inset-autoplay/video-5274186577505958845/video.mp4\",\"res_vastId\" : \"9037|322-15004-35323-35323|c3989276-60ea-4b7d-bb8f-7bb63642c107|35323|resource\",\"res_vastUrl\" : \"https://vision-events.samsungtvads.com/vast?adid=322-15004-35323-35323&guid=c3989276-60ea-4b7d-bb8f-7bb63642c107&psid=KYQ7YTUC26WGKS3KZEO6HD7EHNL6IF4G&https=true&iab=false&launcher_id=35325&autoplay=true\",\"res_width\" : \"\"}],\"cre_text\" : \"곸긽 쒖껌\",\"cre_trackingEvents\" : [\"clickreporturl\",\"impressionreportingurl\",\"thirdpartyimpressionreportingurl\",\"Impression\",\"start\",\"firstQuartile\",\"midpoint\",\"thirdQuartile\",\"complete\",\"pause\",\"resume\",\"ClickTracking\",\"replay\"]},{\"cre_id\" : \"35324\",\"cre_interactionEvents\" : [ \"clickaction\" ],\"cre_resources\" : [{\"res_height\" : \"250\",\"res_type\" : \"acceleratorimage\",\"res_url\" : \"https://d37ju0xanoz6gh.cloudfront.net/image-236557651763648134.jpg\",\"res_width\" : \"300\"}],\"cre_text\" : \"蹂닿린\",\"cre_trackingEvents\" : [\"clickreporturl\",\"impressionreportingurl\",\"thirdpartyclickreportingurl\",\"thirdpartyimpressionreportingurl\"]},{\"cre_id\" : \"35325-0\",\"cre_interactionEvents\" : [ \"clickaction\" ],\"cre_resources\" : [{\"res_height\" : \"270\",\"res_type\" : \"launcherimage\",\"res_url\" : \"https://d37ju0xanoz6gh.cloudfront.net/image-3048433573095216920.jpg\",\"res_width\" : \"480\"}],\"cre_text\" : \"愿묎퀬\",\"cre_trackingEvents\" : [\"clickreporturl\",\"impressionreportingurl\",\"smarthubexitdelayurl\",\"thirdpartyclickreporturl\",\"thirdpartyimpressionreportingurl\"]}],\"ad_detectedHdmiDevName\" : \"\",\"ad_expireTime\" : \"1573632039\",\"ad_guid\" : \"c3989276-60ea-4b7d-bb8f-7bb63642c107\",\"ad_id\" : \"322-15004-35323-35323\",\"ad_refreshInterval\" : \"\",\"ad_rotationInterval\" : \"\",\"ad_type\" : \"AdsPreviewType\"}],\"ad_placementId\" : \"9037\",\"ad_sequenceId\" : \"1\"}";

// var AdDetail = {
//     Type : "",
//     Id : "",
//     Guid : "",
//     DetectedHdmiDeviceName : "",
//     SponsoredRowTitle : "",
//     ExpireTimeString : "",
//     RotationIntervalString : "",
//     RefreshIntervalString : "",
//     ImpressionDelayString : ""
// };

function GetJsonValueStringByKey(jsonData, key)
{
    console.log("GetJsonValueStringByKey : ");
    var value = jsonData[key];
    console.log("value : " + value);

    if ((value == null))
    {
        return null;
    }

    return value;
}

function GetAdInfoList(jsonData)
    {
        var adInfoList = new Array();

        if (jsonData == null)
        {
            console.error("data is null or empty.");
            return adInfoList;
        }

        var ads = GetJsonValueStringByKey(jsonData, "ad_ads");
        // console.log("888888888888888888888888." + JSON.stringify(ads));

        if (ads == null)
        {
            console.error("Can't parse ads array from jsonData");
            return adInfoList;
        }
    
        ads.forEach(function (ad, index) 
        {
           var adInfo = GetAdInfo(ad);
            // console.log("9999999999999999. " + JSON.stringify(array));
//            adInfoList.push(adInfo);
            
//            console.log(item, index);
        });
        
//        foreach (JObject ad in ads)
//        {
//            var adInfo = this.GetAdInfo(ad);
//            console.log("9999999999999999. " + ad.toString());
//            adInfoList.push(adInfo);
//        }

        return adInfoList;
    }

   function GetEventList(events)
   {
   	   var eventList = new Array();

       if (events == null)
       {
           console.error("Error: events in null");
           return eventList;
       }
       events.forEach(function (trackingEvent, index)
       {
           console.log("event : " + trackingEvent);
           eventList.push(trackingEvent);
       })

       return eventList;
   }

function GetAdResourceList(creative)
{
    var resourceList = new Array();

    var resources = GetJsonValueStringByKey(creative, JsonDataKeys.CREATIVE_RESOURCES);
    if (resources == null)
    {
        console.error("Can't parse resources array from creative");
        return resourceList;
    }
    resources.forEach(function (res, index)
    {
        console.log("resource : " + JSON.stringify(res));
        var resType   = res[JsonDataKeys.RESOURCE_TYPE];
        var resUrl    = res[JsonDataKeys.RESOURCE_URL];
        var resWidth  = res[JsonDataKeys.RESOURCE_WIDTH];
        var resHeight = res[JsonDataKeys.RESOURCE_HEIGHT];

       var adRes = new AdResource(resType, resUrl, resWidth, resHeight);
       resourceList.push(adRes);
    })

    return resourceList;
}

class AdInfo
{
    constructor(detail, creatives)
    {
        if (detail != null)
        {
            this.Type = detail.Type;
            this.Id = detail.Id;
            this.Guid = detail.Guid;
            this.DetectedHdmiDeviceName = detail.DetectedHdmiDeviceName;
            this.SponsoredRowTitle = detail.SponsoredRowTitle;

            this.ExpireTime = (!detail.ExpireTimeString) ? 0 : Number(detail.ExpireTimeString);
            this.RotationInterval = (!detail.RotationIntervalString) ? 0 : Number(detail.RotationIntervalString);
            this.RefreshInterval = (!detail.RefreshIntervalString) ? 0 : Number(detail.RefreshIntervalString);
            this.ImpressionDelay = (!detail.ImpressionDelayString) ? 0 : Number(detail.ImpressionDelayString);
        }

        this.Creatives = creatives;

        this.Print();
    }

    /// <summary> Check that whether AdInfo is empty </summary>
    /// <returns> return true if empty, otherwise, return false</returns>
    IsEmpty()
    {
        if ((!this.Type) || (!this.Id) || (!this.Guid) || (!this.Creatives))
        {
            return true;
        }

        return false;
    }

    /// <summary> Print out the content of AdCreative </summary>
    Print()
    {
        if (this.IsEmpty() == false)
        {
            console.log("====================");
            console.log("ad_type : " + this.Type + " , ad_id: " + this.Id + ", ad_guid : " + this.Guid + ", ad_detectedHdmiDevName : " + this.DetectedHdmiDeviceName + ", ad_sponsoredRowTitle : " + this.SponsoredRowTitle);
            console.log("ad_expireTime : " + this.ExpireTime + " , ad_rotationInterval : " + this.RotationInterval + ", ad_refreshInterval : " + this.RefreshInterval);
            this.Creatives.forEach(function (cre, index)
            {
                cre.Print();
            })
            console.log("====================");
        }
    }
}

class AdResource
{
    constructor(type, url, width, height)
    {
        this.Type = type;
        this.Url  = url;
        this.Width  = (!width)  ? 0 : Number(width);
        this.Height = (!height) ? 0 : Number(height);
        console.log("this.Type : " + this.Type + ", this.Url : " + this.Url + "this.Width : " + this.Width + "this.Height : " + this.Height);
    }

    IsEmpty()
    {
        if ((!this.Type) || (!this.Url))
        {
            return true;
        }

        return false;
    }

    IsAnyImageType()
    {
        if (Type.Contains(AdResourceType.IMAGE) == true)
        {
            return true;
        }

        return false;
    }

    IsAnyVideoType()
    {
        if (Type.Contains(AdResourceType.VIDEO) == true)
        {
            return true;
        }

        return false;
    }

    IsImageType()
    {
        if (Type.Equals(AdResourceType.IMAGE) == true)
        {
            return true;
        }

        return false;
    }

    IsAcceleratorImageType()
    {
        if (Type.Contains(AdResourceType.ACCELERATOR_IMAGE) == true)
        {
            return true;
        }

        return false;
    }

    IsBannerImageType()
    {
        if (Type.Contains(AdResourceType.BANNER_IMAGE) == true)
        {
            return true;
        }

        return false;
    }

    IsLauncherImageType()
    {
        if (Type.Contains(AdResourceType.LAUNCHER_IMAGE) == true)
        {
            return true;
        }

        return false;
    }

    IsVideoType()
    {
        if (Type.Equals(AdResourceType.VIDEO) == true)
        {
            return true;
        }

        return false;
    }

    IsAcceleratorVideoType()
    {
        if (Type.Contains(AdResourceType.ACCELERATOR_VIDEO) == true)
        {
            return true;
        }

        return false;
    }

    /// <summary> Check that whether resource type is a autoplay video </summary>
    /// <returns> return true If the resource type is a autoplay video, otherwise, return false</returns>
    IsAutoplayVideoType()
    {
        if (Type.Contains(AdResourceType.AUTOPLAY_VIDEO) == true)
        {
            return true;
        }

        return false;
    }

    /// <summary> Print out the content of AdResource </summary>
    Print()
    {
        if (this.IsEmpty() == false)
        {
            console.log("res_type : " + this.Type + ", res_width : " + this.Width + ", res_height : " + this.Height);
            console.log("res_url : " + this.Url);
        }
    }
}

class AdCreative
{
    constructor(id, text, text2, trackingEvents, interactionEvents, resources)
    {
        this.Id = id;
        this.Text = text;
        this.Text2 = text2;

        this.TrackingEvents = trackingEvents;
        this.InteractionEvents = interactionEvents;
        this.Resources = resources;
    }

    Equals(other)
    {
        if (other == null)
        {
            return false;
        }
        else
        {
            return Id.Equals(other.Id);
        }

    }

    IsEmpty()
    {
        if ((!this.Id) || (!this.TrackingEvents) || (!this.InteractionEvents) || (!this.Resources))
        {
            return true;
        }

        return false;
    }

    Print()
    {
        if (this.IsEmpty() == false)
        {
            console.log("----------");
            console.log("cre_id : " + this.Id + ", cre_text : " + this.Text);
            // console.log("cre_trackingEvents : " + this.TrackingEvents);
            // console.log("cre_interactionEvents : " + this.InteractionEvents);
            this.Resources.forEach(function (res, index)
            {
                console.log("??????????????????");
                res.Print();
            })
        }
    }
}
   function GetAdCreativeList(ad)
   {
       var creativeList = new Array();
       
       creativeJArray = GetJsonValueStringByKey(ad, JsonDataKeys.AD_CREATIVES);

       if (creativeJArray == null)
       {
           console.error("Can't parse creatives array from ad");
           return creativeList;
       }

       creativeJArray.forEach(function (creativeJson, index)
       {
           console.log("000000000000000. index : " + index + " value : " + JSON.stringify(ad));
           var creId   = creativeJson[JsonDataKeys.CREATIVE_ID];
           var creText = creativeJson[JsonDataKeys.CREATIVE_TEXT];
           var creText2 = creativeJson[JsonDataKeys.CREATIVE_TEXT2];

           var trackingEventList    = GetEventList(creativeJson[JsonDataKeys.CREATIVE_TRACKING_EVENTS]);
           var interactionEventList = GetEventList(creativeJson[JsonDataKeys.CREATIVE_INTERACTION_EVENTS]);

           var resourceList = GetAdResourceList(creativeJson);

           var adCre = new AdCreative(creId, creText, creText2, trackingEventList, interactionEventList, resourceList);
           console.log("creId : " + creId + ", creText : " + creText + ", creText2 : " + creText2);
           console.log("creId : " + creId + ", creText : " + creText + ", creText2 : " + creText2 + ",  trackingEventList : " + trackingEventList + ", " + "interactionEventList : " + interactionEventList + ", resourceList : " + resourceList);
           creativeList.push(adCre);
       })
       return creativeList;
    }

function GetAdInfo(ad)
{
    var detail = new Object();

    detail.Type = ad[JsonDataKeys.AD_TYPE];
    detail.Id = ad[JsonDataKeys.AD_ID];
    detail.Guid = ad[JsonDataKeys.AD_GUID];

    detail.DetectedHdmiDeviceName = ad[JsonDataKeys.AD_DETECTED_HDMI_DEV_NAME];
    detail.SponsoredRowTitle = ad[JsonDataKeys.AD_SPONSORED_ROW_TITLE];

    detail.ExpireTimeString = ad[JsonDataKeys.AD_EXPIRE_TIME];
    detail.RotationIntervalString = ad[JsonDataKeys.AD_ROTATION_INTERVAL];
    detail.RefreshIntervalString = ad[JsonDataKeys.AD_REFRESH_INTERVAL];
    detail.ImpressionDelayString = ad[JsonDataKeys.AD_IMPRESSION_DELAY];

    var creativeList = GetAdCreativeList(ad);

    console.log("ad_type : " + detail.Type + " , ad_id: " + detail.Id + " , ad_guid : " + detail.Guid + ", creativeList.Count : " + creativeList.length);
    var adInfo = new AdInfo(detail, creativeList);
    return adInfo;
}

var jsonData = JSON.parse(rowdata);
// console.log("jsonData." + jsonData.);
var SequenceId = GetJsonValueStringByKey(jsonData, "ad_sequenceId");
var PlacementId = GetJsonValueStringByKey(jsonData, "ad_placementId");
var AdInfos = new Array();
AdInfos = GetAdInfoList(jsonData);

console.log(SequenceId);
console.log(PlacementId);