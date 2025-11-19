"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/components/providers/theme-provider";

export default function StoreSettingsPage() {
  const { toast } = useToast();
  const { setTheme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [storeData, setStoreData] = useState({
    storeName: "",
    tagline: "",
    businessEmail: "",
    customerCarePhone: "",
    storeAddress: "",
    aboutSection: "",
    footerText: "",
    logo: "",
    favicon: "",
    socialMedia: {
      facebook: "",
      instagram: "",
      tiktok: "",
      twitter: "",
      youtube: "",
      whatsapp: "",
    },
    showSocialIcons: true,
    theme: "blue" as "blue" | "pink" | "green" | "black",
  });

  useEffect(() => {
    fetchStoreData();
  }, []);

  const fetchStoreData = async () => {
    try {
      const res = await fetch("/api/store");
      const { store } = await res.json();
      if (store) {
        setStoreData(store);
        setTheme(store.theme);
      }
    } catch (error) {
      console.error("Error fetching store data:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/store", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(storeData),
      });

      if (res.ok) {
        setTheme(storeData.theme);
        toast({
          title: "Success",
          description: "Store settings updated successfully",
        });
      } else {
        throw new Error("Failed to update store settings");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update store settings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Store Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>General Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="storeName">Store Name *</Label>
                <Input
                  id="storeName"
                  value={storeData.storeName}
                  onChange={(e) =>
                    setStoreData({ ...storeData, storeName: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  value={storeData.tagline}
                  onChange={(e) =>
                    setStoreData({ ...storeData, tagline: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="businessEmail">Business Email *</Label>
                <Input
                  id="businessEmail"
                  type="email"
                  value={storeData.businessEmail}
                  onChange={(e) =>
                    setStoreData({
                      ...storeData,
                      businessEmail: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="customerCarePhone">Customer Care Phone</Label>
                <Input
                  id="customerCarePhone"
                  value={storeData.customerCarePhone}
                  onChange={(e) =>
                    setStoreData({
                      ...storeData,
                      customerCarePhone: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div>
              <Label htmlFor="storeAddress">Store Address</Label>
              <Input
                id="storeAddress"
                value={storeData.storeAddress}
                onChange={(e) =>
                  setStoreData({ ...storeData, storeAddress: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="aboutSection">About Section</Label>
              <Textarea
                id="aboutSection"
                value={storeData.aboutSection}
                onChange={(e) =>
                  setStoreData({ ...storeData, aboutSection: e.target.value })
                }
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="footerText">Footer Text</Label>
              <Input
                id="footerText"
                value={storeData.footerText}
                onChange={(e) =>
                  setStoreData({ ...storeData, footerText: e.target.value })
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Theme Customization</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="theme">Select Theme Color</Label>
              <Select
                value={storeData.theme}
                onValueChange={(value: any) =>
                  setStoreData({ ...storeData, theme: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="pink">Pink</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="black">Black</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Media Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  id="facebook"
                  value={storeData.socialMedia.facebook}
                  onChange={(e) =>
                    setStoreData({
                      ...storeData,
                      socialMedia: {
                        ...storeData.socialMedia,
                        facebook: e.target.value,
                      },
                    })
                  }
                  placeholder="https://facebook.com/yourpage"
                />
              </div>
              <div>
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  value={storeData.socialMedia.instagram}
                  onChange={(e) =>
                    setStoreData({
                      ...storeData,
                      socialMedia: {
                        ...storeData.socialMedia,
                        instagram: e.target.value,
                      },
                    })
                  }
                  placeholder="https://instagram.com/yourpage"
                />
              </div>
              <div>
                <Label htmlFor="tiktok">TikTok</Label>
                <Input
                  id="tiktok"
                  value={storeData.socialMedia.tiktok}
                  onChange={(e) =>
                    setStoreData({
                      ...storeData,
                      socialMedia: {
                        ...storeData.socialMedia,
                        tiktok: e.target.value,
                      },
                    })
                  }
                  placeholder="https://tiktok.com/@yourpage"
                />
              </div>
              <div>
                <Label htmlFor="twitter">Twitter/X</Label>
                <Input
                  id="twitter"
                  value={storeData.socialMedia.twitter}
                  onChange={(e) =>
                    setStoreData({
                      ...storeData,
                      socialMedia: {
                        ...storeData.socialMedia,
                        twitter: e.target.value,
                      },
                    })
                  }
                  placeholder="https://twitter.com/yourpage"
                />
              </div>
              <div>
                <Label htmlFor="youtube">YouTube</Label>
                <Input
                  id="youtube"
                  value={storeData.socialMedia.youtube}
                  onChange={(e) =>
                    setStoreData({
                      ...storeData,
                      socialMedia: {
                        ...storeData.socialMedia,
                        youtube: e.target.value,
                      },
                    })
                  }
                  placeholder="https://youtube.com/@yourpage"
                />
              </div>
              <div>
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  value={storeData.socialMedia.whatsapp}
                  onChange={(e) =>
                    setStoreData({
                      ...storeData,
                      socialMedia: {
                        ...storeData.socialMedia,
                        whatsapp: e.target.value,
                      },
                    })
                  }
                  placeholder="+1234567890"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" disabled={loading} size="lg">
            {loading ? "Saving..." : "Save Settings"}
          </Button>
        </div>
      </form>
    </div>
  );
}
